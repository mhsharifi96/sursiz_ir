from django.shortcuts import render
from .serializers import TwitSerializers
from rest_framework.views import APIView
from rest_framework.response import Response
import datetime
from bors.models import Twit,Company
from rest_framework import status
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.parsers import MultiPartParser
from django.http import Http404

from rest_framework.pagination import PageNumberPagination
from project.pagination import PaginationHandlerMixin


class TwitApiAdminView(APIView):

    permission_classes = (IsAdminUser,)
    parser_classes = (MultiPartParser,)

    def get(self,response):
        today = datetime.datetime.today()
        twits = Twit.objects.filter(created_on__year=today.year, created_on__month=today.month, created_on__day=today.day,\
            status=1,avaiable=True,company__status=1)
        if len(twits) == 0:
            twits = Twit.objects.filter(status=1,avaiable=True,company__status=1).order_by('-created_on')[:20]
        
        twitserializers = TwitSerializers(twits,many=True)
        print(twitserializers)
        return Response({'twtis':twitserializers.data},status=status.HTTP_200_OK)

    def post(self,request):
        print('data : ',request.POST.get('description'))
        print('file : ',request.FILES)
        # print('image : ',request.POST.get('image'))
        # .FILES['image']
        # return Response({'test':'OK'})
        deny_text="https://t.me"
        company = Company.objects.filter(telegram_channel_id = request.POST.get('company_channel_id'))
        
        if len(company)>=1 : 
            data = {
                'description' : request.POST.get('description'),
                'company' : company[0].id,
                'category' : request.POST.get('category'),
                
            }
            image = request.POST.get('image') 
            if image:
                print('image1111')
                # print(image)
                data['image'] = request.POST.get('image') 
            # if deny_text.encode('utf-8') in data['description']:
            #     data['status'] = 0
            serializer = TwitSerializers(data=data)
            
            if serializer.is_valid():
                serializer.save()
                
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'data':'not found'}, status=status.HTTP_404_NOT_FOUND)


class BasicPagination(PageNumberPagination):
    page_size_query_param = 'limit'
    

class TwitApiView(APIView, PaginationHandlerMixin):
    pagination_class = BasicPagination
    serializer_class = TwitSerializers

    def get(self, request, format=None, *args, **kwargs) :
        instance = Twit.objects.filter(status=1)
        page = self.paginate_queryset(instance)
        if page is not None:
            serializer = self.get_paginated_response(self.serializer_class(page,many=True).data)

        else:
            serializer = self.serializer_class(instance, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)






class TwitDetailApiView(APIView):
    def get_object(self, pk):
        try:
            return Twit.objects.get(pk=pk)
        except Twit.DoesNotExist:
            raise Http404
    def get(self, request, pk, format=None):
        pass
    def post(self, request, pk, format=None):
        pass
    def put(self, request, pk, format=None):
        pass
    def delete(self, request, pk, format=None):
        print("iam in delete ")
        twit = self.get_object(pk)
        twit.status ="0"
        twit.save()
        return Response({
            "message" : "ok"
        })




from django_elasticsearch_dsl_drf.constants import (
    LOOKUP_FILTER_TERMS,
    LOOKUP_FILTER_RANGE,
    LOOKUP_FILTER_PREFIX,
    LOOKUP_FILTER_WILDCARD,
    LOOKUP_QUERY_IN,
    LOOKUP_QUERY_GT,
    LOOKUP_QUERY_GTE,
    LOOKUP_QUERY_LT,
    LOOKUP_QUERY_LTE,
    LOOKUP_QUERY_EXCLUDE,
    SUGGESTER_TERM,
    SUGGESTER_PHRASE,
    SUGGESTER_COMPLETION,
)
from django_elasticsearch_dsl_drf.filter_backends import (
    FilteringFilterBackend,
    IdsFilterBackend,
    OrderingFilterBackend,
    DefaultOrderingFilterBackend,
    SearchFilterBackend,
    SuggesterFilterBackend,
    FunctionalSuggesterFilterBackend,
)
from django_elasticsearch_dsl_drf.viewsets import BaseDocumentViewSet,DocumentViewSet
from django_elasticsearch_dsl_drf.pagination import PageNumberPagination

from .document import TwitDocument
from .serializers import TwitDocumentSerializers

class TwitDocumentView(DocumentViewSet):
    """The TwitDocument view."""

    document = TwitDocument
    serializer_class = TwitDocumentSerializers
    pagination_class = PageNumberPagination
    lookup_field = 'id'
    filter_backends = [
        SuggesterFilterBackend,
        FilteringFilterBackend,
        IdsFilterBackend,
        OrderingFilterBackend,
        DefaultOrderingFilterBackend,
        SearchFilterBackend,
        FunctionalSuggesterFilterBackend,
        
    ]
    # Define search fields
    search_fields = (
        'title',
        'description',
        'status',
        'category',
        'company.name'
        
    )
    # Define filter fields
    filter_fields = {
        'id': {
            'field': 'id',
            # Note, that we limit the lookups of id field in this example,
            # to `range`, `in`, `gt`, `gte`, `lt` and `lte` filters.
            'lookups': [
                LOOKUP_FILTER_RANGE,
                LOOKUP_QUERY_IN,
                LOOKUP_QUERY_GT,
                LOOKUP_QUERY_GTE,
                LOOKUP_QUERY_LT,
                LOOKUP_QUERY_LTE,
            ],
        },
        'title': 'title',
        'description': 'description',
        
        'category': 'category',
        'company_name': 'company.name',
        'status' : 'status',

        
        # 'pages': {
        #     'field': 'pages',
        #     # Note, that we limit the lookups of `pages` field in this
        #     # example, to `range`, `gt`, `gte`, `lt` and `lte` filters.
        #     'lookups': [
        #         LOOKUP_FILTER_RANGE,
        #         LOOKUP_QUERY_GT,
        #         LOOKUP_QUERY_GTE,
        #         LOOKUP_QUERY_LT,
        #         LOOKUP_QUERY_LTE,
        #     ],
        # },
        
    }


    # Suggester fields
    suggester_fields = {
        'title_suggest': {
            'field': 'title.suggest',
            'suggesters': [
                # SUGGESTER_TERM,
                # SUGGESTER_PHRASE,
                SUGGESTER_COMPLETION,
            ],
        },
        
    'description_suggest': {
            'field': 'description.suggest',
            'suggesters': [
                SUGGESTER_COMPLETION,
            ],
        },

    }

    

    # Define ordering fields
    ordering_fields = {
        'id': 'id',
        'title': 'title',
        
        
        
    }
    # Specify default ordering
    ordering = ('-id', 'title')
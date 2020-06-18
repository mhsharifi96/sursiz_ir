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

class TwitApiView(APIView):

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
                print('im okkkkkkkkkkkkkk')
                return Response(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'data':'not found'}, status=status.HTTP_404_NOT_FOUND)


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

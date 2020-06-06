from django.shortcuts import render
from .models import Twit,Company
import  datetime
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from django.http import HttpResponse,HttpResponseRedirect,Http404
# Create your views here.

def index (request):
    
    # test = Twit.objects.filter(id =1)
    print(datetime.date.today())
    # twits = Twit.objects.filter(created_on__date=datetime.date.today())
    today = datetime.datetime.today()
    # twits = Twit.objects.filter(created_on__year=today.year, created_on__month=today.month, created_on__day=today.day)
    twits = Twit.objects.filter(created_on__year=today.year, created_on__month=today.month, created_on__day=today.day,\
            status=1,avaiable=True,company__status=1)
    if len(twits) == 0:
        # twits = Twit.objects.all().order_by('-created_on')[:20]
        twits = Twit.objects.filter(status=1,avaiable=True,company__status=1).order_by('-created_on')[:20]
    
    companeis = Company.objects.all()
    print('twits : ',len(twits))
    return render(request, 'home.html',{
        'twits':twits,
        'companeis': companeis,
    })

class UnavailableTiwtView(LoginRequiredMixin,View):
    def get_object(self, pk):
        try:
            return Twit.objects.get(pk=pk)
        except Twit.DoesNotExist:
            raise Http404
    def get(self,request,pk) : 
        print("get pk : ",pk)
        twit = self.get_object(pk)
        twit.status ="0"
        twit.save()
        return HttpResponseRedirect('/')


    def post(self,request,pk):
        pass
            

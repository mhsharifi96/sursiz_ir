from django.shortcuts import render
from .models import Twit,Company
import  datetime
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from django.http import HttpResponse,HttpResponseRedirect,Http404
import jdatetime
from django.db.models import Q # new
import datetime
# Create your views here.


def signal_week(mdate):
        week = []
        print('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&',mdate,type(mdate))
        for i in  range(5):
            print(mdate+datetime.timedelta(days=-i-1))
            nextday = mdate+datetime.timedelta(days=i+1)
            jnextday = jdatetime.date.fromgregorian(date=nextday)
            print(':::::::::::::::::::::::::::::::::::::::::::',jnextday)
            query = Twit.objects.filter(created_on__year=str(nextday.year)).filter(created_on__month=str(nextday.month)).filter(created_on__day=str(nextday.day))
            if query:
                week.append({
                    'date' : jnextday,
                    'len' : len(query)
                })
            if not week :
                for i in range (5):
                    PerivousDay = mdate+datetime.timedelta(days=-i-1)
                    JPerivousDay = jdatetime.date.fromgregorian(date=PerivousDay)
                    query = Twit.objects.filter(created_on__year=str(PerivousDay.year)).filter(created_on__month=str(PerivousDay.month)).filter(created_on__day=str(PerivousDay.day))
                    if query:
                        week.append({
                            'date' : JPerivousDay,
                            'len' : len(query)
                        })

        print(week)
        return week


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
    
    companeis = Company.objects.filter(status=1)
    
    print('twits : ',len(twits))
    return render(request, 'home.html',{
        'twits':twits,
        'companeis': companeis,
        'jdate' : jdatetime.date.today(),
        'week' : signal_week(today)
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
        twit.status =0
        twit.save()
        return HttpResponseRedirect('/')


    def post(self,request,pk):
        pass
            

class CompanyDetailView(View):
    def get(self,request):
        pass
    

class Search(View):
    def get(self,request):
        return HttpResponseRedirect('/')
    def post(self,request):
        today = datetime.datetime.today()
        if request.POST.get('search'):
            search_text = request.POST.get('search')
            data = Twit.objects.filter(
                Q(description__contains=search_text)|
                Q(company__name__contains=search_text)|
                Q(category__name__contains=search_text)).filter(status=1,avaiable=True,company__status=1)
            companeis = Company.objects.filter(status=1)
            print('******************twits***************** : ',len(data))
            return render(request, 'search.html',{
                'twits':data,
                'companeis': companeis,
                'jdate' : jdatetime.date.today(),
                'search_text': search_text,
                'week' : signal_week(today)
            })

        else:
            return HttpResponseRedirect('/')

class SearchByDate(View):

    
    def post(self,request):
        pass
    
    def get(self,request,year,month,day):
        try:
            date = jdatetime.date(int(year),int(month),int(day))
            mdate = date.togregorian()

            year,month,day = str(mdate).split('-')
            week = signal_week(mdate)
            

            
        except:
            print("errror when convert data:" + str(year) + "-"+str(month) + "-" + str(day))
            return HttpResponseRedirect('/')
        finally:
            data = Twit.objects.filter(created_on__year=str(year)).filter(created_on__month=str(month)).filter(created_on__day=str(day))
            companeis = Company.objects.filter(status=1)
            print('******************twits***************** : ',len(data))
            return render(request, 'search.html',{
                'twits':data,
                'companeis': companeis,
                'jdate' : date,
                'search_text': date,
                'week' : week,
            })
        return HttpResponseRedirect('/')
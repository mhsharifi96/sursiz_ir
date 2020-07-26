# Api Document

HOST : `borsiz.ir`




## Twit
برای دریافت توییت ها کافی است به ادرس ذیل درخواست دهید.  

URL : `<HOST>/api/app/twit/`  
که در پاسخ توییت ها را به صورت صفحه بندی شده دریافت می نمایید.

| param   |      description      | example url |
|----------|:-------------:|------:|
| page    | number of page |  /api/app/twit/?page=19|
| limit |    maximum number of items to return   |  /api/app/twit/?limit=69 |
| offset | the starting position of the query in relation to the complete set of unpaginated items |    /api/app/twit/?offset=100  |
    
```pagination default per page : 100```

همچنین میتوانید با استفاده از  `&` پارامترها را به صورت ترکیبی استفاده نمایید.
به عنوان مثال 

`/api/app/twit/?page=19&limit=69`

که به معنای آن است صفحه ۱۹ و حداکثر در صفحه ۶۹ توییت نمایش می دهد.

### new Twit (socket programing)
با توجه به اینکه ممکن است در هنگام مشاهده توییت ها توییت جدید اضافه شود پس نیاز به سوکت داریم تا بتوانیم توییت های جدید را دریافت کنیم .

برای دریافت توییت های جدید کافیست به ادرس ذیل درخواست دهید
URL : `ws://<HOST>/ws/lobby/`  
به عنوان مثال اگر هاست بر روی لوکال خود باشد ادرس به نحو ذیل می باشد.
URL : `ws://127.0.0.1:8000/ws/lobby/`  

**note** : in this url we use `ws` insted of `http`   
**note** : just use in all twit and can't use on another part because this channel return uncategorized twit  

response :  
```
{
  "message": "پیام جدید",
  "twit": {
    "id": 3963,
    "image": null,
    "description": "آخرین تست برای چک کردن",
    "title": "سلام خوبی",
    "company": 1,
    "category": 1,
    "status": 1
  }
}
```


TODO : complete channel for categorized twit 

## Search and Categorization

با توجه به نیاز اپ ما به قسمت های ذیل احتیاج داریم و همچنین با توجه اینکه هر توییت از یک کانال است و دارای فرمت خاصی برای دسته بندی درست انها نیست ما از سرچ استفاده میکنیم تا با توجه به نیاز خود داده های مورد نیاز را استخراج نماییم
که برای شروع به ادرس ذیل درخواست میدهیم

URL : `<HOST>/api/app/search/`  

که درپاسخ همه توییت های موجود را بر میگرداند.

response : 
```
{
    {
    "count": 3907,
    "next": "http://127.0.0.1:8000/api/app/search/?page=2",
    "previous": null,
    "facets": {},
    "results": [
        {
            "id": 3939,
            "image": "",
            "title": "سلام",
            "description": "#اینم هدیه مدیر \n از الان تا فردا صبح لینک کانال vip را رایگان کردیم بعد از آن حق عضویت 2 میلیون تومان است.\n\n@mr_economy\n\nدقیق میگم کجا بفروشید ،کجا بخرید کجا تماشاگر باشید  ۵۰ نفر عضو شوند لینکو بر میدارم 👆👆",
            "company": {
                "id": 2,
                "name": "بورسکده"
            },
        ...
```
حال برای محدود کردن آن باید از پارامترهایی استفاده نماییم که در جدول ذیل شرح داده شده است

| param   |      description      | example url | note |
|----------|:-------------:|------:|---------:|
| title | search on title | /api/app/search/?title=`title_example<str>`| - |
| description | search on description | /api/app/search/?description=`desc_example<str>` | |
|company_name | search on name of compnay | /api/app/search/?company_name=`comp_example<str>` | |
| compnay_id  | search on id of company | /api/app/search/?company_id=`comp_id<int>`| 
| status | Categorization by status | /api/app/search/?status=`0 or 1` | - |
| category | Categorization by category | /api/app/search/?category= | - |

در جدول ردیف هایی که دارای `-` هست فعلا نیازی به استفاده از آن نیست .  
حال میتوانیم ردیف های بالا به صورت ترکیبی با یکدیگر `&` کنیم
به عنوان مثال


```
?company_id=5&description=سلام

ex : http://127.0.0.1:8000/api/app/search/?company_name=%D8%AF%D9%84%D8%A7%D8%B1&description__contains=%D8%B3%D9%84%D8%A7%D9%85
```
که نتایج مربوط به شرکتی با ای دی ۵ و توییت های که محتوی عبارت `سلام` است را بر میگرداند.


همچنین میتوانید برای جستجو دقیق تر به این نحو سرچ نمایید.
به عنوان مثال :‌

```
?description__contains=سلام
?description__contains=خبر*موثر  # *desc

```
`*desc` :  
درصورتی که عبارت`خبر موثر `را بدون استفاده از `(*)ستاره` بنویسم ممکن این عبارت به صورت هشتگ گذاری شده در محتوا موجود باشد یا به صورت جمع کلمه و یا به صورت ترکیبی از آن ها که در مثال `#خبرهای_موثر` میتوان آن را مشاهده کرد. به همین دلیل از `*`استفاده می نماییم تا جستجوهای بیشتری برای ما نمایش داده شود

همچنین میتوانید از فیلترهای ذیل هم  درصورت نیاز استفاده نمایید

```
?description__in= بفجر
?description__startswith=بفج
?description__endswith=فجر
?description__exclude =بفجر
```



[ElasticSearch Document](https://django-elasticsearch-dsl-drf.readthedocs.io/en/0.20.8/nested_fields_usage_examples.html) for more info

---

## Campany
برای دریافت لیست کامل نام کانال (که ما در برنامه آن ها را با نام کمپانی در نظر گرفته ایم تا درصورت اضافه شدن اطلاعات دیگر به مشکل برخورد نکنیم) به ادرس ذیل درخواست خود را ارسال میکنید.  

URL : `<host>/api/app/company/`  
که پاسخی همانند زیر دریافت مینمایید.  
response : 
```
[
    {
        "id": 1,
        "name": "سینگال های رانتی",
        "telegram_url": "https://t.me/signalrantiii",
        "telegram_channel_id": "1089466869",
        "description": "قبل از خرید و فروش در بازار سرمایه اول اموزش ببینید \r\n\r\nدیر بیا ولی درست بیا\r\n\r\nبازار بورس همیشه هست و همیشه هم سهم خوب پیدا میشه \r\n\r\nهمیشه سهام کم ریسک و pبر e پایین بخرید\r\n\r\n\r\n1001089466869",
        "image": null,
        "slug": "signalrantiii",
        "status": 1,
        "status_show": 2,
        "owner": 1
    },
    ...
```

همچنین برای دریافت یک کمپانی خاص کافی است به ادرس ذیل درخواست نمایید.  

URL : `<HOST>/api/app/company/<id>/`  

e.x:  
```
request : <HOST>/api/app/company/3/  

response :   
{
    "id": 3,
    "name": "کانال تک سهم",
    "telegram_url": null,
    "telegram_channel_id": "1329648288",
    "description": "#معرفی بهترین #تک_سهم های بازار\r\n\r\n#کامل_ترین_پکیج_بورسی با بهترین کیفیت از ما بخواهید\r\n\r\n1001329648288",
    "image": null,
    "slug": "tak-sahm",
    "status": 1,
    "status_show": 2,
    "owner": 1
}


```


## Category

برای دریافت کامل (لیست) دسته بندی ها هم به ادرس ذیل درخواست میدهیم 

URL : `<HOST>/api/app/category`  

response : 
```
[
    {
        "id": 1,
        "name": "بورس",
        "description": "تحلیل بورس و فرابورس",
        "image": null
    }
]
```

و برای دریافت یک دسته خواست ادرس فوق را به همراه ای دی آن ارسال میکنید.

URL : `<HOST>/api/app/category/<id>/`

e.x :

```
request : <HOST>/api/app/category/1/

response :   
{
    "id": 1,
    "name": "بورس",
    "description": "تحلیل بورس و فرابورس",
    "image": null
}
```

---



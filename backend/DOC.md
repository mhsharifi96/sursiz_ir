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







[](http://127.0.0.1:8000/api/app/search/?company_name=%D8%AF%D9%84%D8%A7%D8%B1&description__contains=%D8%B3%D9%84%D8%A7%D9%85)


[](https://django-elasticsearch-dsl-drf.readthedocs.io/en/0.20.8/nested_fields_usage_examples.html)

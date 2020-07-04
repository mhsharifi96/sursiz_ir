# Borsiz_ir


## Installation


### requirement 
 [x] python3
 [x] postgres sql
 
 
 
1. create virtual environment  
``` virtualenv -p python3 .env ```    
2. active virtual environment   
``` source .env/bin/activate```  
3. install pakages   
``` pip install - r requeirments.txt```
4. rename `config-sample.ini` to `config.ini`  
5. create database on psql and set up database username and password on `config.ini` file  
6.import `myx.sql` file to new created database   
 `psql -U username dbname < myx.sql`  
 
 7.run django   
 
 ```
 python manage.py makemigraions
 python manage.py migrate
 python manage.py runserver
 ```

---



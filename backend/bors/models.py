from django.db import models
from django.conf import settings
# Create your models here.

class Company(models.Model):
    STATUS = (
    (0,"DisActive"),
    (1,"Active")
    )
    STATUS_SHOW = (
    (0,"None"),
    (1,"RegisterUser"),
    (2,"AllUser")
    )
    
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField( max_length=500)
    telegram_url = models.CharField( max_length=500,blank=True,null = True)
    telegram_channel_id = models.CharField(max_length=55,blank=True,null = True)
    description =  models.TextField()
    image = models.ImageField(upload_to='company', blank = True,null = True)
    slug = models.SlugField()
    status = models.IntegerField(choices=STATUS, default=1)
    status_show = models.IntegerField(choices=STATUS_SHOW, default=2)
    # instagram_url
    def __str__(self):
        return self.name

class Category(models.Model):

    name = models.CharField( max_length=500)
    description =  models.CharField( max_length=1000)
    image = models.ImageField(upload_to='category', blank = True,null = True)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categoreis"

    def __str__(self):
        return self.name

    # def get_absolute_url(self):
    #     return reverse("Category_detail", kwargs={"pk": self.pk})



class Twit(models.Model):
    STATUS = (
    (0,"Draft"),
    (1,"Publish")
    )
    description =  models.TextField()
    title = models.CharField( max_length=100,null = True, blank = True)
    category  = models.ForeignKey(Category, on_delete=models.CASCADE)
    company = models.ForeignKey(Company,  on_delete=models.CASCADE)
    avaiable = models.BooleanField(default=True)
    status = models.IntegerField(choices=STATUS, default=1)
    image = models.ImageField(upload_to='twit',blank = True,null = True)
    updated_on = models.DateTimeField(auto_now= True)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_on']
        verbose_name = "Twit"
        verbose_name_plural = "Twits"

    def __str__(self):
        return self.description

    # def get_absolute_url(self):
    #     return reverse("Twit_detail", kwargs={"pk": self.pk})

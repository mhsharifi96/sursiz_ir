from rest_framework import serializers
from bors.models import Twit,Category,Company

from django_elasticsearch_dsl_drf.serializers import DocumentSerializer
from .document import  TwitDocument


class Base64ImageField(serializers.ImageField):
    """
    A Django REST framework field for handling image-uploads through raw post data.
    It uses base64 for encoding and decoding the contents of the file.

    Heavily based on
    https://github.com/tomchristie/django-rest-framework/pull/1268

    Updated for Django REST framework 3.
    """

    def to_internal_value(self, data):
        from django.core.files.base import ContentFile
        import base64
        import six
        import uuid

        # Check if this is a base64 string
        if isinstance(data, six.string_types):
            # Check if the base64 string is in the "data:" format
            if 'data:' in data and ';base64,' in data:
                # Break out the header from the base64 content
                header, data = data.split(';base64,')

            # Try to decode the file. Return validation error if it fails.
            try:
                decoded_file = base64.b64decode(data)
            except TypeError:
                self.fail('invalid_image')

            # Generate file name:
            file_name = str(uuid.uuid4())[:12] # 12 characters are more than enough.
            # Get the file name extension:
            file_extension = self.get_file_extension(file_name, decoded_file)

            complete_file_name = "%s.%s" % (file_name, file_extension, )

            data = ContentFile(decoded_file, name=complete_file_name)

        return super(Base64ImageField, self).to_internal_value(data)

    def get_file_extension(self, file_name, decoded_file):
        import imghdr

        extension = imghdr.what(file_name, decoded_file)
        extension = "jpg" if extension == "jpeg" else extension

        return extension

class CompanySerializers(serializers.ModelSerializer):
    class Meta : 
        model = Company
        fields = '__all__'

class CategotySerializer(serializers.ModelSerializer):
    class Meta : 
        model = Category
        fields = '__all__'


class TwitSerializers(serializers.ModelSerializer):
    image = Base64ImageField(required=False,allow_null=True,max_length=None, use_url=True)
    company = CompanySerializers()
    class Meta : 
        model = Twit
        fields = ('id', 'image', 'description', 'title','company','category','status','created_on' )#"__all__"
    
    def create(self,validated_data):
        
        return Twit.objects.create(**validated_data)



class TwitDocumentSerializers(DocumentSerializer):
    # company = CompanySerializers()
    class Meta : 
        document = TwitDocument
        fields = ('id', 'image', 'title','description', 'company','status','created_on')
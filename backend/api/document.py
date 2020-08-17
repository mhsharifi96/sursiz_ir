
from django_elasticsearch_dsl import  Index, fields, Document
from django.conf import settings
from elasticsearch_dsl import analyzer

from bors.models import Twit

# Name of the Elasticsearch index
Twit_Index = Index(settings.ELASTICSEARCH_INDEX_NAMES[__name__])

Twit_Index.settings(
    number_of_shards=1,
    number_of_replicas=1
)


html_strip = analyzer(
    'html_strip',
    tokenizer="standard",
    filter=["standard", "lowercase", "stop", "snowball"],
    char_filter=["html_strip"]
)


@Twit_Index.doc_type
class TwitDocument(Document):
    """Twit ElasticSearch Document"""

    # id = fields.IntegerField(attr='id')
    
    # title = fields.TextField(
    #     attr='title',
    #     fields={
    #         'suggest': fields.Completion(),
    #     }
    # )
    # description = fields.TextField(
    #     attr='description',
    #     fields={
    #         'suggest': fields.Completion(),
    #     }
    # )
    # category = fields.ObjectField(
    #     properties={
    #         'name': fields.TextField(),
    #         'description': fields.TextField(),
    #     }
    # )

    company = fields.ObjectField(
        # attr='company_indexing',
        properties={
            'id' : fields.IntegerField(),
            'name': fields.TextField(
                analyzer=html_strip,
                fields={
                    'raw': fields.KeywordField(),
                    'suggest': fields.CompletionField(),
                }),
            # 'description': fields.TextField(),
        }
    )

    image = fields.FileField(attr='image')


    status = fields.IntegerField(attr='status')
    id = fields.IntegerField(attr='id')

    title = fields.TextField(
        analyzer=html_strip,
        fields={
            'raw': fields.TextField(analyzer='keyword'),
            'suggest': fields.CompletionField(),
            
        }
    )

    description = fields.TextField(
        analyzer=html_strip,
        fields={
            'raw': fields.TextField(analyzer='keyword'),
            'suggest': fields.CompletionField(),
        }
    )
    created_on = fields.DateField(attr='created_on')
    

    class Django(object):
        """Inner nested class Django."""

        model = Twit  # The model associate with this Document


    # class Django : 
    #     model = Twit
    #     fields = [
    #         'id',
    #         'title',
    #         'description',
    #     ]

    
from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver

from django_elasticsearch_dsl.registries import registry
from bors.models import Twit
from asgiref.sync import async_to_sync
import channels.layers
from .serializers import TwitSerializers


@receiver(post_save, sender=Twit)
def new_game_handler(**kwargs):
    """
    When a new game is created, this builds a list of all open games and 
    sends it down to all channels in the 'lobby' group
    """
    # if new
    if kwargs['created']:
        # send the latest list to all channels in the "lobby" group
        # the Group's send method requires a dict
        # we pass "text" as the key and then serialize the list of open games
        # avail_game_list = Game.get_available_games()
        # avail_serializer = GameSerializer(avail_game_list, many=True)

        instance = kwargs['instance']
        serializer = TwitSerializers(instance)
        # print('instance : ',instance.description)
        channel_layer = channels.layers.get_channel_layer()
        # print("ch : ",channel_layer)
        async_to_sync(channel_layer.group_send)(
            'lobby',
            {
                'type': 'send_new_twit',
                'message': 'پیام جدید',
                'twit' : serializer.data,
            }
        )





@receiver(post_save)
def update_document(sender, **kwargs):
    """Update document on added/changed records.

    Update Book document index if related `books.Publisher` (`publisher`),
    `books.Author` (`authors`), `books.Tag` (`tags`) fields have been updated
    in the database.
    """
    app_label = sender._meta.app_label
    model_name = sender._meta.model_name
    instance = kwargs['instance']

    # print(':::::::::::::::::::::::::::::::::::::',kwargs['instance'])

    if app_label == 'twit':
        # If it is `books.Publisher` that is being updated.
        if model_name == 'company':
            instances = instance.company.all()
            for _instance in instances:
                registry.update(_instance)

        # If it is `books.Author` that is being updated.
        # if model_name == 'author':
        #     instances = instance.books.all()
        #     for _instance in instances:
        #         registry.update(_instance)

        # If it is `books.Tag` that is being updated.
        # if model_name == 'tag':
        #     instances = instance.books.all()
        #     for _instance in instances:
        #         registry.update(_instance)




@receiver(post_delete)
def delete_document(sender, **kwargs):
   
    app_label = sender._meta.app_label
    model_name = sender._meta.model_name
    instance = kwargs['instance']

    # print(':::::::::::::::::::::::::::::::::::::',kwargs['instance'])

    if app_label == 'twit':
        # If it is `books.Publisher` that is being updated.
        if model_name == 'company':
            instances = instance.company.all()
            for _instance in instances:
                registry.update(_instance)

        # # If it is `books.Author` that is being updated.
        # if model_name == 'author':
        #     instances = instance.books.all()
        #     for _instance in instances:
        #         registry.update(_instance)
        #         # registry.delete(_instance, raise_on_error=False)

        # # If it is `books.Tag` that is being updated.
        # if model_name == 'tag':
        #     instances = instance.books.all()
        #     for _instance in instances:
        #         registry.update(_instance)
        #         # registry.delete(_instance, raise_on_error=False)
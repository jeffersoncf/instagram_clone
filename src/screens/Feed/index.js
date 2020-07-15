import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import options from '../../../assets/options.png';
import like from '../../../assets/like.png';
import comment from '../../../assets/comment.png';
import send from '../../../assets/send.png';
import save from '../../../assets/save.png';

export default function Feed() {

  const posts = [
    {
      id: '1',
      author: 'unifipoficial',
      picture_url: 'https://instagram.fjdo2-1.fna.fbcdn.net/v/t51.2885-15/e35/104433906_283530636422493_6522386861704807441_n.jpg?_nc_ht=instagram.fjdo2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=pPHYr_mEa2UAX8SDg7W&oh=3b7a7c8038bc0286331faa8645f1c8ca&oe=5F3A0448',
      likes: 1.548,
      description: 'O que faz um Analista de Sistemas?',
      hashtags: '#unifip #ads #minhamaeumapeca',
      place: 'Patos, Paraiba'
    },
    {
      id: '2',
      author: 'prefeiturabrejodocruz',
      picture_url: 'https://instagram.fjdo2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/109822848_402892694003967_1624229069541989080_n.jpg?_nc_ht=instagram.fjdo2-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=fHIiPb1UgIYAX_fv3om&oh=1bccb562569acd8250e86c3a1b949afc&oe=5F385F97',
      likes: 276,
      description: 'A Vigilância em Saúde continua o seu trabalho de higienização do comércio municipal e assim garantindo a prevenção de todos contra o COVID-19, desde já a Prefeitura Municipal Agradece a parceria',
      hashtags: '#brejodocruz #fiqueemcasa',
      place: 'Brejo do Cruz, Paraiba'
    },
    {
      id: '3',
      author: 'apple',
      picture_url: 'https://instagram.fjdo2-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/95012897_242542167105259_4926775810864840478_n.jpg?_nc_ht=instagram.fjdo2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=lKnZzJrNLxoAX-rmukv&oh=75c7076c1bc0fc8252639a7c74ddeb5f&oe=5F394EFC',
      likes: 531,
      description: 'Commissioned by Apple. “Being homebound while springtime teases outside has deepened my appreciation for my garden and the small flora I’ve placed in my window.',
      hashtags: '#ShotoniPhone #EarthDay2020',
      place: 'Los Angeles, California'
    },
  ];

  function renderItem({ item: post }) {
    return (
      <View style={styles.post}>

        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>
          </View>

          <View style={styles.postOptions}>
            <TouchableOpacity>
              <Image source={options} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image
            style={styles.picture_url}
            source={{ uri: post.picture_url }}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.actions}>
            <View style={styles.leftActions}>
              <TouchableOpacity style={styles.action}>
                <Image source={like} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Image source={comment} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={send} />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Image source={save} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.likes}>{post.likes} likes</Text>
            <Text style={styles.hashtags}>{post.hashtags}</Text>
            <Text style={styles.description}>{post.description}</Text>
          </View>
        </View>

      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  post: {
    marginVertical: 15
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: 15
  },
  postOptions: {},
  userInfo: {},
  author: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold'
  },
  place: {
    fontSize: 12,
    color: '#666'
  },
  picture_url: {
    width: '100%',
    height: 400
  },
  footer: {
    paddingHorizontal: 15
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15
  },
  action: {
    marginRight: 8
  },
  leftActions: {
    flexDirection: 'row'
  },
  likes: {
    fontWeight: 'bold',
    fontSize: 12
  },
  hashtags: {
    color: '#002D5E'
  },
  description: {
    color: '#000',
    lineHeight: 18
  }
});
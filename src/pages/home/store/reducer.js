import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS ({
  topicList: [/*{
  id: 1,
  title:'社会热点',
  imgUrl: 'https://upload-images.jianshu.io/upload_images/13905325-fe8cc0a74f558e50.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1080/format/webp'
},
  {
   id: 2,
   title: '手绘',
   imgUrl: 'https://upload-images.jianshu.io/upload_images/2535252-0d550806dcfc5720?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id: 3,
    title: '简书电影',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/1905082-a237d9c152945a08.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id: 4,
    title: '读书',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/3868727-5f90d9a18cf328f6?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'   
  },
  {
    id: 5,
    title: '摄影',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/1402963-8e11137a0b32aa8a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id: 6,
    title: '旅行-在路上',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/2535252-abc3047b950c6428?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id: 7,
    title: '历史',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/6126137-be04c42a4d9e3036?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }*/],
//-----------------文章板块-----------
  articleList:[/*{
    id: 1,
    title: 'Markdown | 最具有效率的写作工具一次性掌握',
    desc: '我们平常在网站或者自媒体写作的时候，经常是我们在word或者记事本中写出来，然后复制粘贴到网站或者是自媒体平台发出来，发表后还是干巴巴的一堆文字',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/2374770-cd586c7e3124cab4.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },
  {
    id: 2,
    title: '错过一个人会有什么感受？',
    desc: '今天在微博上看到一个话题征集：错过一个人的感受是什么？有一个男生的直接把一个名字缩写打出来，没再多说什么。那一刻我突然意识到原来错过一个人的感受...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/15883738-4bc07358f748a1a8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },
  {
    id: 3,
    title: '《新倚天屠龙记》：她，迷倒40亿人',
    desc: '一个演员，迷倒40亿观众，不忽悠。 赵敏，敢爱敢恨的郡主，一度迷倒众多男神的梦中情人，又电闪雷鸣了。 如今，《新倚天屠龙记》的网播量突破45亿...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/16537557-4af2b0772d66c292.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },
  {
    id: 4,
    title: '靠写字为生?',
    desc: '我为什么上"简书"写字，因为看到朋友圈一朋友说坚持写了一年终于收到一笔文章奖赏50块，我知道她付出的努力远不止这小小的50块，也许她...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/16111916-4b336271089a8711.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
  },
  {
    id: 5,
    title: '别去打扰一个不回你微信的人',
    desc: '在微信聊天中，你是否也有遇到这样的经历，你给一个人发微信，你的消息很明显不是群发，不是推销，更不是借钱，但是那个人，他就是总也不回复你。 一个小...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/2100084-d7b1b41be27916c5?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }*/],
  //Recommend List:
  recommendList:[
  /*{
    id: 1,
    imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
  },
  {
    id: 2,
    imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
  },
  {
    id: 3,
    imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
  },
  {
    id: 4,
    imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
  }*/],
//writerList:
  writerList:[
 /* {
    id: 1,
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
    title: '董克平日记',
    desc: '写了837.6k字 · 2.8k喜欢'
  },
  {
    id: 2,
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/14715425/e0668349-8c75-43db-8a9d-c388e5f00d0d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
    title: '简书钻首席小管家',
    desc: '写了237.5k字 · 161.6k喜欢'
  },
  {
    id: 3,
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3950651/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
    title: '三儿王屿',
    desc: '写了169.5k字 · 3.6k喜欢'
  },
  {
    id: 4,
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
    title: '卢璐说',
    desc: '写了1390k字 · 28.6k喜欢'
  },
  {
    id: 5,
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/3343569/6940ee65-036f-4b7a-9935-5915d9b67d14.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
    title: '吴晓布',
    desc: '写了739k字 · 24.7k喜欢'
  }*/],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  return state.merge({
   topicList: fromJS(action.topicList),
   articleList: fromJS(action.articleList),
   recommendList: fromJS(action.recommendList),
   writerList: fromJS(action.writerList)
  });
};

const addArticleList = (state, action) => {
  return state.merge({
  'articleList': state.get('articleList').concat(action.list),
  'articlePage':action.nextPage
  });
};

export default(state = defaultState, action) => {
	switch(action.type){

    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action);


    case constants.ADD_ARTICLE_LIST:
      return addArticleList(state, action);


    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show);

		default:
		  return state;
	}
}
<template>
    <div>
        <h1>Articles</h1>

       <div v-for="article in articles" >
            <h2>{{article.title}}</h2>
            <h3>by {{article.author}}</h3>
            <br/>
            
        </div>
    </div>

    
</template>

<script>
import articles from '~/data/articles.json'
import acticle from '~/components/article';

export default {
    name: "Articles.vue",
    data:function(){
        return{
            articles: articles
        }
    }
}
</script>

<style scoped>

</style>
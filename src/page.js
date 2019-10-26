const template = `
    <div>
        <a class="page-item" :class='{disabled:current === 1}' @click='changPage(1)'>首页</a>
        <a class="page-item" :class='{disabled:current === 1}' @click='changPage(current-1)'>上一页</a>

        <a class="page-item" :class='{active:item == current}' v-for='item in pageList' @click='changPage(item)'>{{item}}</a>

        <a class="page-item" :class='{disabled:current === pageNumber}' @click='changPage(current+1)'>下一页</a>
        <a class="page-item" :class='{disabled:current === pageNumber}' @click='changPage(pageNumber)'>尾页</a>
        <span>{{current}}/{{pageNumber}}</span>
    </div>
`
export default{
    template,
    props:['current','total','pageSize','panelNumber'],
    computed: {
        pageNumber(){   
            return Math.ceil(this.total / this.panelNumber)
        },
        pageList(){
            var page = [];
            var min = this.current - Math.floor(this.pageSize / 2);
            if(min < 1){
                min = 1
            }else if(min + this.pageSize > this.pageNumber){
                min = min + this.pageNumber - (min + this.pageSize - 1)
            }
            var max = min + this.pageSize - 1
            if(max > this.pageNumber){
                max = this.pageNumber
            }
            for(var i = min; i <= max; i++){
                page.push(i)
            }
            return page
        }
    },
    methods: {
        changPage(n){
            this.$emit('change',n)
        }
    },
}
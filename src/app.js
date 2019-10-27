import page from './page.js'
import MoveList from './Movelist.js'
import mockData from './mockDatas.js'

const template = `
    <div class='app'>
        <MoveList :Mdata='moveData' />
        
        // <page class='page' 
        // :current='current'
        // :total='total'
        // :pageSize='pageSize'
        // :panelNumber='panelNumber'
        // @change='changeP'
        // />

        {{arr}}
    </div>
`
export default {
    template,
    data() {
        return {
            current: 1,
            total: mockData.length,
            pageSize: 5,
            panelNumber: 3,
            mockData: mockData,
            timer: 1,
            arr:[]
        }
    },
    mounted() {
        // this.arr.push(1)
        // this.arr.__proto__ = []
        console.log(this.arr ,Array.prototype)
    },
    computed: {
        moveData() {
            var min = (this.current - 1) * this.panelNumber
            var max = this.current * this.panelNumber
            var data = this.mockData.slice(min, max)
            return data
        }
    },
    components: {
        page,
        MoveList
    },
    methods: {
        changeP(newPage) {
            if(newPage <= 1){
                newPage = 1
            }else if(newPage >= Math.ceil(this.total / this.panelNumber)){
                newPage = Math.ceil(this.total / this.panelNumber)
            }
            this.current = newPage;
        }
    }
}
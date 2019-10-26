import moves from './move.js'

const template = `
    <div>
        <moves v-for='item in Mdata' :data='item' />
    </div>
`

export default{
    template,
    props:['Mdata'],
    components:{
        moves
    }
}
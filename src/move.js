const template = `
    <div class='data'>
        <div style='float:left; width: 200px;margin-right: 20px;'>
            <img :src="data.poster" alt="data.name" style='width:100%; height: 100%;'>
        </div>
        <div class='words'>
            <h2 style='margin-bottom:10px'>{{data.name}}</h2>
            <div class='data-content'>
                <p>英文名：{{data.ename}}</p>
                <p>类型：{{data.type}}</p>
                <br/>
                <p>上映地区：{{data.area}}</p>
                <p>上映时间：{{data.upDate}}</p>
                <p>时长：{{data.time}}</p>
            </div>
            <div class="desc">
                {{data.intro}}
            </div>
        </div>
    </div>
`
export default {
    template,
    props: ['data']
}
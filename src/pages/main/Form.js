
export default class form {
        constructor(){
            this.state = {
                data : [],
                volume : []
            }
        }

        formObject = (event) => {
            event.preventDefault()
            let $ = document.querySelector.bind(document);
            let date = $('#date');
            let price = $('#price');
            let amount = $('#amount');

            let data = {date : this.formatDate(date) , price : this.formatPrice(price) , amount : amount.value , volume : this.formatPriceX(price , amount) };

            this.state.data.push(data)
            this.createBodyTable()
            this.total()

        }

        formatDate = (date) =>{
            let data = new Date(...date.value
                .split('-')
                .map(function(item , indice){
                    if(indice === 1){
                        return item -1;
                    }
                    return item;
                })
            )
            return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
        }

        formatInput = () =>{
            var price = document.querySelector('#price');
            var v = price.value.replace(/\D/g,'');
            v = (v/100).toFixed(2) + '';
            v = v.replace(".", ",");
            v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
            v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
            price.value = v;
        }

        formatPrice = (price) =>{
            var v = price.value.replace(/\D/g,'');
            v = (v/100).toFixed(2) + '';
            v = v.replace(".", ",");
            v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
            v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
            return v;
        }

        formatVolume = (price) =>{
            var v = price;
            v = parseFloat(v).toFixed(2) + '';
            v = v.replace(".", ",");
            v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
            v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
            return v;
        }

        formatPriceX = (formatPrice , amount) =>{
            let val = formatPrice.value;
            val = val.replace('.' , '');
            val = val.replace(',' , '.');
            val = parseFloat(val);
            val = (parseInt(amount.value) * val);
            val = JSON.stringify(val);
            val = this.formatVolume(val)
            return val;
        }

        total = () => {
            let volume = this.state.data.reduce((acumulador , item) => {
                    let total = item.volume;
                    total = total.replace('.', ' ')
                    total = total.replace(',', '.')
                    total = parseFloat(total)
                    return acumulador + total
            } , 0)

            document.querySelector('#total').innerHTML = this.formatVolume(volume);

        }

        createBodyTable = () => {
            let table = `
                ${this.state.data.map(item => `
                    <tr>
                        <td>${item.date}</td>
                        <td>${item.price}</td>
                        <td>${item.amount}</td>
                        <td id="volume">${item.volume}</td>
                    </tr>
                `).join('')}
        `;
            document.querySelector('#table').innerHTML = table;
        }

}



export default class form {
        constructor(){
            this.state = {
                data : []
            }
        }

        formObject = (event) => {
            event.preventDefault()
            let $ = document.querySelector.bind(document);
            let date = $('#date');
            let price = $('#price');
            let amount = $('#amount');

            let data = {date : this.formatDate(date) , price : this.formatPrice(price) , amount : amount.value  };

            this.state.data.push(data)
            this.createBodyTable()

            console.log(parseFloat(this.formatPrice(price)))
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

        createBodyTable = () => {
            let table = `
            <tbody>
                <tr className="text-center">
                    ${this.state.data.map(item =>
                        `
                            <td>${item.date}</td>
                            <td>${item.amount}</td>
                            <td>${item.price}</td>
                        `)}
                </tr>
            </tbody>
        `
            document.querySelector('#table').innerHTML += table;
        }
}



export default class form {
        constructor(){
            this.state = {
                data : [],
            }
        }

        formObject = (event) => {
            event.preventDefault()

            let $ = document.querySelector.bind(document);
            let date = $('#date');
            let price = $('#price');
            let amount = $('#amount');
            let name = $('#name');
            let description = $('#description');

            let alert = '';
            if(!name.value){
                alert = 'Ensira um nome no campo.';
                $('#alert-info').innerHTML = alert;
                return false;
            }

            if(!description.value){
                alert = 'Ensira uma descrição.';
                $('#alert-info').innerHTML = alert;
                return false;
            }

            if(!date.value){
                alert = 'Ensira uma data no campo.';
                $('#alert-info').innerHTML = alert;
                return false;
            }

            if(!price.value){
                alert = 'Ensira um valor.';
                $('#alert-info').innerHTML = alert;
                return false;
            }

            if(!amount.value || amount.value <= 0 ){
                alert = 'Ensira uma quantidade válida.';
                $('#alert-info').innerHTML = alert;
                return false;
            }

            if(name.value && description.value && date.value && price.value && amount.value){
                alert = '';
                $('#alert-info').innerHTML = alert;

                let data = {name : name.value , description : description.value , date : this.formatDate(date) , price : this.formatPrice(price) , amount : amount.value , volume : this.formatPriceX(price , amount) };
                this.state.data.push(data)
                this.createBodyTable()
                this.total()
                this.hours()

            }




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
            return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()} - Hrs ${this.hours()} `
        }

        hours = () =>{
            let hours = new Date()
            hours = `${hours.getHours()}:${hours.getMinutes()}`
            return hours;
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

            document.querySelector('#total').innerHTML = 'R$ ' + this.formatVolume(volume);

        }

        createBodyTable = () => {
            let table = `
                ${this.state.data.map(item => `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.description}</td>
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


import React , {Component} from 'react';
import Form from './Form';

export default class Main extends Component {
    constructor(){
        super()
        this.state = {
            data : [],
        }
        this.form = new Form();
    }

    render(){
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className='col-md-12 text-center alert-success' id='alert-info'></div>
                    <div className="col-md-12 mb-3">
                        <div className="card">
                            <div className="card-header text-center">
                                <h3 className='text-secondary'>Cadastro de notas </h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.form.formObject} className='row'>
                                    <div className='form-group col' >
                                        <input id='name' className='form-control'  placeholder='Nome' type='text'/>
                                    </div>
                                    <div className='form-group col' >
                                        <input id='description' className='form-control'  placeholder='Descrição' type='text'/>
                                    </div>
                                    <div className='form-group col' >
                                        <input id='date' className='form-control'  type='date'/>
                                    </div>
                                    <div className='form-group col'>
                                        <input id='price' type='text' className='form-control' onKeyUp={this.form.formatInput} placeholder='Valor' />
                                    </div>
                                    <div className='form-group col'>
                                        <input id='amount' type='text' className='form-control' placeholder='Quantidade' />
                                    </div>
                                    <div className='form-group col'>
                                        <button className='btn btn-primary'>Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header text-center">
                                <h3 className='text-secondary'>Lista de notas</h3>
                            </div>
                            <div className="card-body">
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr className='text-center'>
                                            <th>Nome</th>
                                            <th>Descrição</th>
                                            <th>Data / Hora</th>
                                            <th>Valor</th>
                                            <th>Quantidade</th>
                                            <th>Volume</th>
                                        </tr>
                                    </thead>
                                    <tbody id='table' className='text-center'>

                                    </tbody>
                                    <tfoot>
                                    <tr className='text-center'>
                                        <td colSpan='5' className='badge-secondary'><strong>TOTAL</strong></td>
                                        <td id='total' className='font-weight-bold'></td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
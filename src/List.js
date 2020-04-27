import React,{Component} from 'react';

class List extends Component{
    constructor(){
        super();
        this.state={
            id:"",
            task:"",
            items:[]
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }

    onChange=event=>{
        this.setState({task:event.target.value});
    }

    onSubmit=event=>{
        event.preventDefault();
        this.setState({
            task:"",
            items:[...this.state.items,this.state.task]
        })
    }

    onDelete=(val,event)=>{
        event.preventDefault();
        var data=[...this.state.items];
        data.filter(function(item,index){
            if(index===val){
                data.splice(index,1);
            }
        });
        this.setState({items:[...data]});
    }

    render(){
        return (
        <div>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label for="taskName">Task Name</label>
                    <input
                    type="text"
                    className="form-control"
                    id="taskName"
                    value={this.state.task}
                    onChange={this.onChange}
                    required
                    />
                </div>
                <button type="submit" className="btn btn-success btn-block">submit</button>
            </form>
            <table className="table mt-3">
                {this.state.items.map((item,index)=>(
                    <tr>
                        <td key={index} className="text-left">
                            {item}
                        </td>
                        <td className="text-right">
                            <button
                                href=""
                                className="btn btn-danger"
                                onClick={this.onDelete.bind(this,index)}
                            >Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
        )
    }
}

export default List;
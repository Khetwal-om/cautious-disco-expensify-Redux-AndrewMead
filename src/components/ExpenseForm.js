import React, { Component } from 'react';


export default class ExpenseForm extends Component {

    state = {
        description: '',
        note: '',
        amount: ''
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }


    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description
        }));
    }


    onAmountChange = (e) => {
        const amount = e.target.value;

        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }

    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange} />
                    <input
                        type="text"
                        onChange={this.onAmountChange}
                        placeholder="Amount"
                        value={this.state.amount}
                    />

                    <textarea placeholder="please  Add note"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >

                    </textarea>

                    <button>Add</button>

                </form>

                <h2>Expense Form</h2>
            </div>
        );
    }
}


export class AccountService {
  accounts = [
    {
      name: 'Savings Account',
      status: 'Active',
    },
    {
      name: 'Current Account',
      status: 'dormant',
    },
    {
      name: 'Hidden Account',
      status: 'Active',
    },
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({
      name: name,
      status: status,
    });
    console.log(this.accounts);
  }
  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    console.log(this.accounts);
  }
}

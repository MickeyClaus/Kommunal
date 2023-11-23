export const home = () =>
  import('../../pages/home/modules/home.module').then((m) => m.HomeModule);

  export const contracts = () =>
  import('../../pages/contracts/modules/contracts.module').then((m) => m.ContractsModule);

  export const individuals = () =>
  import('../../pages/individuals/modules/individuals.module').then((m) => m.IndividualsModule);

  export const payment = () =>
  import('../../pages/payment/modules/payment.module').then((m) => m.PaymentModule);


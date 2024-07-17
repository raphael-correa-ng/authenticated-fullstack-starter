export default class StockAppManager {

  private readonly store;

  constructor(store) {
    this.store = store;
  }

  public setText(text: string) {
    this.store.dispatch({ 
      type: 'set-text',
      text
    });
  }
}
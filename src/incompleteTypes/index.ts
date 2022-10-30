class SetLike<T> {
  #values = new Set<T>();

  add(value: T) {
    this.#values.add(value);
  }
}

let uniqueNamesOrBooleans = new SetLike();

uniqueNamesOrBooleans.add("Josh");
uniqueNamesOrBooleans.add(false);

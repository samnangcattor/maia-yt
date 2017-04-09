var instance = null;

/**
 * Set the storage instance.
 * @param {?Storage} storage the storage instance.
 */
export function setInstance(storage) {
  instance = storage;
}

/**
 * Returns the storage instance.
 * @return {?Storage} the storage instance.
 */
export function getInstance() {
  return instance;
}

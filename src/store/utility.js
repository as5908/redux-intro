/**
 *
 * @param {old object} oldObject
 * @param {an object with new properties} updatedProperties
 */
export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

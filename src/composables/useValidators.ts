const useValidators = () => {
  const isEmpty = (fieldName: string, fieldValue: string) => {
    return !fieldValue ? "The " + fieldName + " field is required" : "";
  };

  const minLength = (fieldName: string, fieldValue: string, length: number) => {
    return fieldValue?.length <= length
      ? "The " +
          fieldName +
          " field should be minimum " +
          length +
          " characters"
      : "";
  };

  const alphanumericValue = (fieldName: string, fieldValue: string) => {
    return /[A-z0-9]/.test(fieldValue)
      ? "The " +
          fieldName +
          " field should contain only alphanumeric characters"
      : "";
  };
  return { isEmpty, minLength, alphanumericValue };
};

export default useValidators;

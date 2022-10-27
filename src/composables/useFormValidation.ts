import { reactive, computed } from "vue";
import useValidators from "./useValidators";
const useFormValidation = () => {
  const { isEmpty, minLength, alphanumericValue } = useValidators();
  const errors: any = reactive({});

  const validateUsername = (fieldName: string, fieldValue: string) => {
    errors[fieldName] =
      isEmpty(fieldName, fieldValue) ||
      alphanumericValue(fieldName, fieldValue);
  };

  const validatePassword = (fieldName: string, fieldValue: string) => {
    errors[fieldName] =
      isEmpty(fieldName, fieldValue) ||
      minLength(fieldName, fieldValue, 8) ||
      alphanumericValue(fieldName, fieldValue);
  };

  const validInput = computed(() => errors.any((error: string) => !!error));

  return { errors, validateUsername, validatePassword, validInput };
};

export default useFormValidation;

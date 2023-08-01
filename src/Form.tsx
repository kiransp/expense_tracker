import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./Categories";

// 1. creating a schema
const schema = z.object({
  amount: z.number({ invalid_type_error: "Amount is required" }),
  category: z.string().nonempty({ message: "Category is required" }),
  description: z
    .string()
    .min(3, { message: "Description should be minimum 3 characters" }),
});

// 2. extract the inferred type
type FormData = z.infer<typeof schema>;
interface FormProps {
  handleExpense: (data: any) => void;
}
function Form({ handleExpense }: FormProps) {
  // 3. Attach zod with react-form by passing the 2nd step type as <FormData>  and then passing a resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FieldValues) => {
    handleExpense(data);
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description", { required: true })}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { required: true, valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Category
          </label>
          <select
            {...register("category", { required: true })}
            id="category"
            className="form-select"
          >
            <option></option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;

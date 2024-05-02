import { UsersContext } from "@/context/users";
import { useContext } from "react";
import MultipleSelector from "./ui/multiselect";
import { Option } from "./ui/multiselect";

export const MultiUserSelect = ({
  onChange,
  value,
}: {
  onChange: (options: Option[]) => void;
  value: Option[]
}) => {
  const { users } = useContext(UsersContext);
  const userOptions = users.map((user) => ({ value: user, label: user }));
  return (
    <MultipleSelector
      options={userOptions}
      value={value}
      placeholder="Select participants"
      onChange={onChange}
      hidePlaceholderWhenSelected
      disabled={users.length === 0}
    />
  );
};

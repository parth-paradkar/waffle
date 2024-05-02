import { useContext } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UsersContext } from "@/context/users";

export function SelectUser({ placeholder }: { placeholder?: string }) {
  const { users } = useContext(UsersContext);

  return (
    <Select disabled={users.length === 0}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder ?? "Payed by.."} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {users.map((user) => (
            <SelectItem key={user} value={user}>
              {user}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

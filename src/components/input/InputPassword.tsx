import { EyeOffIcon } from "lucide-react"

import {
  Field,
  FieldLabel,
} from "@/src/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/src/components/ui/input-group"

export function InputPassword() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="inline-end-input">Senha</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="inline-end-input"
          type="password"
          placeholder="Enter password"
        />
        <InputGroupAddon align="inline-end">
          <EyeOffIcon />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}

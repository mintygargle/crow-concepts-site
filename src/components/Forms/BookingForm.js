import React from "react"

import {
  Textbox,
  Textarea,
  Label,
  InputGroup,
  Checkbox,
} from "../components/Forms/form_index"
import Form from "../components/Forms/Form.styled"
import * as Text from "../components/Text/text_index"
import { PrimaryBtn } from "../components/Buttons/button_index"

const BookingForm = () => {
  return (
    <div>
      <Text.Banner>Booking</Text.Banner>
      <Form action="" className="wrapper --center col border">
        <InputGroup>
          <Label>Name</Label>
          <Textbox></Textbox>
        </InputGroup>
        <InputGroup>
          <Label>Email</Label>
          <Textbox></Textbox>
        </InputGroup>
        <InputGroup>
          <Label>Phone Number</Label>
          <Textbox></Textbox>
        </InputGroup>
        <InputGroup>
          <Label>Desired Services (check all that apply)</Label>
          <InputGroup>
            <Label>Photography</Label>
            <Checkbox></Checkbox>
          </InputGroup>
          <InputGroup>
            <Label>Writing Commissions</Label>
            <Checkbox></Checkbox>
          </InputGroup>
          <InputGroup>
            <Label>Art Commissions</Label>
            <Checkbox></Checkbox>
          </InputGroup>
          <InputGroup>
            <Label>Film Production</Label>
            <Checkbox></Checkbox>
          </InputGroup>
        </InputGroup>
        <InputGroup>
          <Label>Subject</Label>
          <Textbox></Textbox>
        </InputGroup>
        <InputGroup>
          <Label>Message</Label>
          <Textarea></Textarea>
        </InputGroup>
        <PrimaryBtn>Submit</PrimaryBtn>
      </Form>
    </div>
  )
}

export default BookingForm

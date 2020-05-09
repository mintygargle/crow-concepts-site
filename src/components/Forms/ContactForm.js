import React from "react"
import { useForm, Controller } from "react-hook-form"

import {
  Textbox,
  Textarea,
  Label,
  InputGroup,
} from "../components/Forms/form_index"
import Form from "../components/Forms/Form.styled"
import * as Text from "../components/Text/text_index"
import { PrimaryBtn } from "../components/Buttons/button_index"

const ContactForm = () => {
  const user = "michaelmontytanner@gmail.com"

  const { register, handleSubmit, watch, errors, control } = useForm()

  const onSubmit = data => {
    const endpoint = "michaelmontytanner@gmail.com"

    fetch(endpoint, {
      method: "post",
      body: data,
    })
      .then(response => response.text())
      .then(function (text) {
        console.log(text)
      })
      .catch(err => console.log(err))
  }

  console.log(watch("name"))
  console.log(watch("email"))
  console.log(watch("phone"))
  console.log(watch("message"))

  return (
    <div>
      <Text.Banner>Contact Us</Text.Banner>
      <div className="wrapper --center">
        <Text.P>
          Contact us for information about pricing and service details. We'll
          respond to your questions in 48 hours or less!
        </Text.P>
      </div>
      <br />
      <Form
        action=""
        className="wrapper --center col border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputGroup>
          <Label>Name</Label>
          <Controller
            as={Textbox}
            name="name"
            control={control}
            ref={register}
            defaultValue=""
          />
        </InputGroup>
        <InputGroup>
          <Label>Email</Label>
          <Controller
            as={Textbox}
            name="email"
            control={control}
            ref={register}
            defaultValue=""
            required
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </InputGroup>

        <InputGroup>
          <Label>Phone Number</Label>
          <Controller
            as={Textbox}
            name="phone"
            control={control}
            ref={register}
            defaultValue=""
          />
        </InputGroup>
        <InputGroup>
          <Label>Subject</Label>
          <Controller
            as={Textbox}
            name="subject"
            control={control}
            ref={register}
            defaultValue=""
          />
        </InputGroup>
        <InputGroup>
          <Label>Message</Label>
          <Controller
            as={Textarea}
            name="message"
            control={control}
            ref={register}
            defaultValue=""
            required
          />
        </InputGroup>
        <PrimaryBtn type="submit">Submit</PrimaryBtn>
      </Form>
    </div>
  )
}

export default ContactForm

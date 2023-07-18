import React from 'react'
import {ButtonAtom} from "./button";

export default {
  title: "Button",
  component: ButtonAtom,
};

export const ButtonPrimary = () => <ButtonAtom variant="primary" >Text</ButtonAtom>
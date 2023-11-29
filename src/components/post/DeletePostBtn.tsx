"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
const DeletePostButton = () => {
  const form = useFormStatus();

  return (
    <Button variant="destructive" type="submit" disabled={form.pending}>
      Delete
    </Button>
  );
};

export default DeletePostButton;

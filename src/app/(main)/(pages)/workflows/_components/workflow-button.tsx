"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import { useModal } from "@/providers/modal-provider";

type Props = {};

const WorkflowButton = (props: Props) => {
  const { setOpen, setClose } = useModal();
  //   const handleClick = () => {
  //     setOpen(
  //       <CustomModal
  //         title="Create a Workflow Automation"
  //         subheading="Workflows are a powerfull that help you automate tasks."
  //       >
  //         <Workflowform />
  //       </CustomModal>
  //     );
  //   };
  return (
    <Button>
      <Plus></Plus>
    </Button>
  );
};

export default WorkflowButton;

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EmojiPicker from "emoji-picker-react";
import { db } from "@/utils/dbConfig";
import { Incomes } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { toast } from "sonner";

function EditIncomes({ income, refreshData }) {
  const [emojiIcon, setEmojiIcon] = useState(income?.icon);
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [name, setName] = useState(income?.name);
  const [amount, setAmount] = useState(income?.amount);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (income) {
      setEmojiIcon(income.icon);
      setName(income.name);
      setAmount(income.amount);
    }
  }, [income]);

  const onUpdateIncomes = async () => {
    try {
      setLoading(true);
      await db
        .update(Incomes)
        .set({ name, amount, icon: emojiIcon })
        .where(eq(Incomes.id, income.id));
      refreshData();
      toast.success("Income updated successfully!");
    } catch (error) {
      toast.error("Failed to update income.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Income</DialogTitle>
          <DialogDescription>Modify the income details below:</DialogDescription>
        </DialogHeader>
        <div className="mt-5">
          <Button
            variant="outline"
            className="text-lg"
            onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
          >
            {emojiIcon}
          </Button>
          {openEmojiPicker && (
            <div className="absolute z-20">
              <EmojiPicker
                onEmojiClick={(e) => {
                  setEmojiIcon(e.emoji);
                  setOpenEmojiPicker(false);
                }}
              />
            </div>
          )}
          <div className="mt-2">
            <h2 className="text-black font-medium my-1">Income Name</h2>
            <Input
              placeholder="e.g. Freelance"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <h2 className="text-black font-medium my-1">Income Amount</h2>
            <Input
              type="number"
              value={amount}
              placeholder="e.g. 10000"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              onClick={onUpdateIncomes}
              disabled={loading || !name || !amount}
            >
              {loading ? "Updating..." : "Save Changes"}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function DeleteIncomes({ income, refreshData }) {
  const onDeleteIncomes = async () => {
    try {
      await db.delete(Incomes).where(eq(Incomes.id, income.id));
      refreshData();
      toast.success("Income deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete income.");
      console.error(error);
    }
  };

  return (
    <Button variant="destructive" onClick={onDeleteIncomes}>
      Delete
    </Button>
  );
}

export { EditIncomes, DeleteIncomes };

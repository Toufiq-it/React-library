import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useCreateBorrowMutation } from "@/redux/api/baseApi"
import type { IBooks, IBorrow } from "@/types"
import { format } from "date-fns"
import { BookmarkPlus, CalendarIcon } from "lucide-react"
import { useState } from "react"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"


interface BorrowFormProps {
    book: IBooks;
}

export function AddBorrow({ book }: BorrowFormProps) {
    const [open, setOpen] = useState(false);
    const [createBorrow] = useCreateBorrowMutation();
    const navigate = useNavigate();
    // console.log(data);

    const form = useForm<IBorrow>({
        defaultValues: {
            book: book._id,
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
        console.log(data);
        const bookId = book._id;
        const borrowData = {
            book: bookId,
            ...data,
        };
        const res = await createBorrow(borrowData).unwrap();
        console.log("Inside Submit function", res);
        setOpen(false);
        toast.success("Book Borrowed successfully!");
        navigate("/borrow-summary");

    };

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button
                    className=' text-green-500 hover:bg-green-500 hover:text-white cursor-pointer'
                    variant="outline" >
                    Borrow <BookmarkPlus />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <AlertDialogHeader className="space-y-2">
                            <AlertDialogTitle>Borrow book: <span className="text-blue-300">{book.title}</span> </AlertDialogTitle>
                            <AlertDialogDescription>
                            </AlertDialogDescription>
                            <div className="space-y-5">

                                {/* book id */}
                                <FormField
                                    control={form.control}
                                    name="book"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Book Id</FormLabel>
                                            <FormControl>
                                                <Input readOnly type="text" className="bg-gray-100" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                {/* quantity */}
                                <FormField
                                    control={form.control}
                                    name="quantity"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Quantity</FormLabel>
                                            <FormControl>
                                                <Input required type="number" placeholder="Number" {...field} value={field.value || ""} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                {/* // Date */}
                                <FormField
                                    control={form.control}
                                    name="dueDate"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel>Due Date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "pl-3 text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                        // disabled={(date) =>
                                                        //     date > new Date() || date < new Date("1900-01-01")
                                                        // }
                                                        captionLayout="dropdown"
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="mt-4">
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction type="submit">
                                    Borrow
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </form>
                </Form>
            </AlertDialogContent>
        </AlertDialog>
    )
};



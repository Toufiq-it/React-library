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
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useUpdateBookMutation } from "@/redux/api/baseApi"
import type { IBooks } from "@/types"
import { SquarePen } from "lucide-react"
import { useState } from "react"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { toast } from "react-toastify"


interface UpdateFormProps {
    book: IBooks;
}

export function UpdateBook({ book }: UpdateFormProps) {
    const [open, setOpen] = useState(false);
    
    const [updateBook] = useUpdateBookMutation();
    
    const form = useForm({
        defaultValues: {
            title: book.title,
            author: book.author,
            genre: book.genre,
            isbn: book.isbn,
            copies: book.copies,
            description: book.description,
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
        const available = (data.copies > 0) ? true : false;
        const bookData = {
            ...data,
            available: available,
        };

        const res = await updateBook({ id: book._id, body: bookData })
        console.log("updated book", res);
        setOpen(false);
        toast.success("Book Updated successfully!");
    };

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button
                    className=' text-blue-500 cursor-pointer'
                    variant="outline"
                >
                    Edit <SquarePen />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <AlertDialogHeader className="space-y-2">
                            <AlertDialogTitle>Update The Book</AlertDialogTitle>
                            <AlertDialogDescription>
                            </AlertDialogDescription>
                            <div className="space-y-5">

                                {/* title */}
                                <FormField
                                    control={form.control}
                                    name="title"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input required placeholder="Book Name" {...field} value={field.value || ""} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                {/* author */}
                                <FormField
                                    control={form.control}
                                    name="author"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Author</FormLabel>
                                            <FormControl>
                                                <Input required placeholder="Author Name" {...field} value={field.value || ""} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                {/* genre */}
                                <FormField
                                    control={form.control}
                                    name="genre"
                                    render={({ field }) => (
                                        <FormItem className="mt-3 mb-3">
                                            <FormLabel>Genre</FormLabel>
                                            <Select required onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select a genre to set" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="FICTION">Fiction</SelectItem>
                                                    <SelectItem value="NON_FICTION">Non Fiction</SelectItem>
                                                    <SelectItem value="SCIENCE">Science</SelectItem>
                                                    <SelectItem value="HISTORY">History</SelectItem>
                                                    <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                                                    <SelectItem value="FANTASY">Fantasy</SelectItem>
                                                </SelectContent>
                                            </Select>

                                        </FormItem>
                                    )}
                                />
                                {/* isbn */}
                                <FormField
                                    control={form.control}
                                    name="isbn"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Isbn</FormLabel>
                                            <FormControl>
                                                <Input required type="number" placeholder="Number" {...field} value={field.value || ""} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                {/* copies */}
                                <FormField
                                    control={form.control}
                                    name="copies"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Copies</FormLabel>
                                            <FormControl>
                                                <Input required type="number" placeholder="Number" {...field} value={field.value || ""} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                {/* description */}
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Description" {...field} value={field.value || ""} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="mt-4">
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction type="submit">Update</AlertDialogAction>
                        </AlertDialogFooter>
                    </form>
                </Form>
            </AlertDialogContent>
        </AlertDialog>
    )
};


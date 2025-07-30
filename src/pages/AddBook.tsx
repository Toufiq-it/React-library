import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBookMutation } from "@/redux/api/baseApi";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";


export function AddBook() {
    const navigate = useNavigate();
    const form = useForm();

    const [createBook] = useCreateBookMutation()

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const available = (data.copies > 0) ? true : false;
        const bookData = {
            ...data,
            available: available,
        };

        const res = await createBook(bookData).unwrap();
        console.log("Inside Submit function", res);

        toast.success("Book added successfully!");
        form.reset();
        navigate("/books");
    }

    return (
        <div>
            <h1 className="text-3xl md:text-4xl flex items-center justify-center font-semibold mt-10">Add a New Book</h1>
            <div className="flex items-center justify-center mt-10">

                <Card className="w-[480px]">
                    <CardHeader>
                        <CardTitle>Enter your book informetion</CardTitle>
                        <CardDescription>
                        </CardDescription>
                    </CardHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <CardContent className="space-y-4">
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
                            </CardContent>
                            <CardFooter className="flex justify-end gap-2 mt-5">
                                <Button type="submit">
                                    Add Book
                                </Button>
                            </CardFooter>
                        </form>
                    </Form>
                </Card>
            </div >
        </div>
    )
};

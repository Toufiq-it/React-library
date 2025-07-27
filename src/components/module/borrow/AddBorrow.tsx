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
import { BookmarkPlus } from "lucide-react"
import { useForm } from "react-hook-form"


export function AddBorrow() {
    const form = useForm();

    const onSubmit = (data) => {
        console.log(data);

    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    className=' text-green-500 cursor-pointer'
                    variant="outline" >
                    Borrow <BookmarkPlus />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <AlertDialogHeader className="space-y-3">
                            <AlertDialogTitle>Add To The Borrow</AlertDialogTitle>
                            <AlertDialogDescription>

                                {/* copies */}
                                <FormField
                                    control={Form.control}
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
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="mt-4">
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </form>
                </Form>
            </AlertDialogContent>
        </AlertDialog>
    )
}
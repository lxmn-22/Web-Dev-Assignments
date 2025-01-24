import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const Dashboard = () => {
    return (
        <div className="flex min-h-screen">
            <div className="flex-1 bg-gray-100 dark:bg-gray-950">
                <div className="p-6 grid gap-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Revenue
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <div className="text-2xl font-bold">
                                    ₹ 1,90,000.50
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    +20.1% from last month
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Monthly Sales Earnings
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <div className="text-2xl font-bold">
                                    ₹ 90,000.50
                                </div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    +120.1% from last month
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Pets Sold
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <div className="text-2xl font-bold">69</div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    +70.1% from last month
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Happy Pet Owners
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <div className="text-2xl font-bold">129</div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    +61.1% from last month
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid gap-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Recent Signups
                                </CardTitle>
                            </CardHeader>

                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Email</TableHead>
                                            <TableHead>Plan</TableHead>
                                            <TableHead>Date</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        <TableRow>
                                            <TableCell>John Doe</TableCell>
                                            <TableCell>
                                                john@gmail.com
                                            </TableCell>
                                            <TableCell>Pro</TableCell>
                                            <TableCell>22-11-2024</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>John Doe</TableCell>
                                            <TableCell>
                                                john@gmail.com
                                            </TableCell>
                                            <TableCell>Pro</TableCell>
                                            <TableCell>22-11-2024</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>John Doe</TableCell>
                                            <TableCell>
                                                john@gmail.com
                                            </TableCell>
                                            <TableCell>Pro</TableCell>
                                            <TableCell>22-11-2024</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>John Doe</TableCell>
                                            <TableCell>
                                                john@gmail.com
                                            </TableCell>
                                            <TableCell>Pro</TableCell>
                                            <TableCell>22-11-2024</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>John Doe</TableCell>
                                            <TableCell>
                                                john@gmail.com
                                            </TableCell>
                                            <TableCell>Pro</TableCell>
                                            <TableCell>22-11-2024</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

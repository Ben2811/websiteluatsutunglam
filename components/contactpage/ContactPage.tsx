"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactData, CONTACT_INFO } from "@/lib/utils/contact";
import { activityData } from "@/lib/utils/activity";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  legalConsultationSchema,
} from "@/lib/schema/zodschema";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Building,
  User,
  AtSign,
  Clock,
  FileText,
  MessageSquare,
  Send,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ContactPage() {
  const { hero, contactOptions } = contactData;
  const { cta } = activityData;

  // Form nâng cao sử dụng legalConsultationSchema
  const legalForm = useForm<z.infer<typeof legalConsultationSchema>>({
    resolver: zodResolver(legalConsultationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      district: "",
      city: "",
      caseTitle: "",
      message: "",
      consent: false,
      newsletter: false,
    },
  });

  const onLegalSubmit = (data: z.infer<typeof legalConsultationSchema>) => {
    console.log("Legal consultation form submitted:", data);
    // Handle legal form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {hero.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">{hero.description}</p>

            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:0938571549">
                <Button
                  variant="default"
                  className="bg-black hover:bg-gray-800 text-white"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  0938571549 - Luật sư Lê Song Tùng
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-600 hover:bg-blue-50"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Đặt lịch hẹn tư vấn pháp lý
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {contactOptions.title}
            </h2>
            <p className="text-lg text-gray-600">
              {contactOptions.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactOptions.options.map((option, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:shadow-md transition-shadow duration-300 h-full"
              >
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{option.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {option.description}
                  </p>
                  <div className="mt-auto pt-4 w-full h-12">
                    <Link href={option.actionHref || "#"}>
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full border-blue-600 text-blue-600"
                      >
                        <option.icon className="w-6 h-6 mr-2" />
                        {option.buttonText}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Form and Info Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Form Column */}
            <div className="lg:col-span-7 bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Form yêu cầu chi tiết</h3>
              </div>

              <p className="text-gray-600 mb-6">
                Hãy điền vào form yêu cầu này và chúng tôi sẽ phản hồi bạn trong
                vòng 24 giờ để thảo luận về nhu cầu pháp lý của bạn.
              </p>

              <Form {...legalForm}>
                <form
                  onSubmit={legalForm.handleSubmit(onLegalSubmit)}
                  className="space-y-6"
                >
                  {/* Họ và tên */}
                  <FormField
                    control={legalForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-gray-700">
                          <User className="w-4 h-4 text-blue-600 mr-2" />
                          Họ và tên
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nhập họ tên của bạn"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  {/* Thông tin liên hệ */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={legalForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center text-gray-700">
                            <AtSign className="w-4 h-4 text-blue-600 mr-2" />
                            Email liên hệ
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Email của bạn"
                              className="w-full"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={legalForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center text-gray-700">
                            <Phone className="w-4 h-4 text-blue-600 mr-2" />
                            Số điện thoại
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="Số điện thoại của bạn"
                              className="w-full"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Công ty/Doanh nghiệp */}
                  <FormField
                    control={legalForm.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-gray-700">
                          <Building className="w-4 h-4 text-blue-600 mr-2" />
                          Công ty/Doanh nghiệp (Tùy chọn)
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Tên Công ty / Doanh nghiệp"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  {/* Địa chỉ */}
                  <FormField
                    control={legalForm.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center text-gray-700">
                          <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                          Địa chỉ liên hệ
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Địa chỉ liên hệ"
                            className="w-full"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={legalForm.control}
                      name="district"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Phường/xã"
                              className="w-full"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={legalForm.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Tỉnh/Thành"
                              className="w-full"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500" />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Chi tiết vấn đề pháp lý */}
                  <div>
                    <div className="flex items-center mb-4">
                      <FileText className="w-5 h-5 text-blue-600 mr-2" />
                      <h4 className="text-lg font-semibold">
                        Chi tiết vấn đề pháp lý
                      </h4>
                    </div>

                    <div className="space-y-4">
                      <FormField
                        control={legalForm.control}
                        name="lawType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              Loại hình dịch vụ
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Chọn loại hình dịch vụ" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="criminal">
                                 Tham gia tố tụng
                                </SelectItem>
                                <SelectItem value="civil">
                                  Tư vấn pháp luật
                                </SelectItem>
                                <SelectItem value="family">
                                 Đại diện ngoài tố tụng
                                </SelectItem>
                                <SelectItem value="business">
                                  Dịch vụ pháp lý
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={legalForm.control}
                        name="urgency"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              Mức độ khẩn cấp
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Mức độ khẩn cấp của vụ án?" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="urgent">
                                  Rất khẩn cấp (cần giải quyết trong 24h)
                                </SelectItem>
                                <SelectItem value="high">
                                  Khẩn cấp (cần giải quyết trong tuần)
                                </SelectItem>
                                <SelectItem value="medium">
                                  Bình thường (có thể chờ 2-3 tuần)
                                </SelectItem>
                                <SelectItem value="low">
                                  Không gấp (đang tìm hiểu thông tin)
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={legalForm.control}
                        name="caseTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              Tiêu đề vụ việc/ vụ kiện
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="Tên tiêu đề vụ việc/ vụ kiện liên quan đến vấn đề pháp lý của bạn"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={legalForm.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              Mô tả chi tiết về vấn đề pháp lý của bạn
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                className="min-h-[150px]"
                                placeholder="Vui lòng cung cấp mô tả toàn diện về tình hình pháp lý của bạn, bao gồm:
- Thông tin cơ bản và mốc thời gian của các sự kiện
- Các bên liên quan và mối quan hệ của họ
- Các câu hỏi hoặc mối quan tâm pháp lý cụ thể mà bạn có
- Bất kỳ thời hạn hoặc các dấu mốc thời gian nào
- Tài liệu hoặc bằng chứng bạn có
- Kết quả hoặc mục tiêu mong muốn của bạn"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-red-500" />
                            <p className="text-xs text-gray-500 mt-1">
                              Bạn càng cung cấp chi tiết, chúng tôi càng hiểu rõ
                              tình hình của bạn và cung cấp hướng dẫn phù hợp.
                            </p>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Liên hệ ưu tiên */}
                  <div>
                    <div className="flex items-center mb-4">
                      <MessageSquare className="w-5 h-5 text-blue-600 mr-2" />
                      <h4 className="text-lg font-semibold">Liên hệ ưu tiên</h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <FormField
                        control={legalForm.control}
                        name="contactMethod"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              Phương pháp liên hệ ưu tiên
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Chúng tôi liên lạc với bạn như thế nào?" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="phone">
                                  Liên lạc điện thoại (Gọi điện/Zalo)
                                </SelectItem>
                                <SelectItem value="email">Gửi Email</SelectItem>
                                <SelectItem value="meeting">
                                  Tư vấn trực tiếp tại văn phòng
                                </SelectItem>
                                <SelectItem value="other">
                                  Phương pháp khác
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={legalForm.control}
                        name="bestTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              Thời gian tốt nhất để liên hệ
                              <span className="text-red-500 ml-1">*</span>
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Thời gian rảnh của bạn là khi nào?" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="morning">
                                  Buổi sáng (8h-12h)
                                </SelectItem>
                                <SelectItem value="afternoon">
                                  Buổi chiều (14h-18h)
                                </SelectItem>
                                <SelectItem value="evening">
                                  Buổi tối (19h-21h)
                                </SelectItem>
                                <SelectItem value="anytime">
                                  Bất cứ lúc nào
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="space-y-3">
                      <FormField
                        control={legalForm.control}
                        name="consent"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <div className="flex-none pt-1">
                              <FormControl>
                                <input
                                  type="checkbox"
                                  className="w-5 h-5"
                                  checked={field.value}
                                  onChange={field.onChange}
                                />
                              </FormControl>
                            </div>
                            <div className="flex-grow">
                              <FormLabel className="text-sm text-gray-600 font-normal">
                                Tôi đồng ý để Văn phòng Luật sư Tùng Lâm liên hệ
                                với tôi về vấn đề pháp lý của tôi. Tôi hiểu rằng
                                biểu mẫu này không tạo ra mối quan hệ luật
                                sư-khách hàng và thông tin của tôi sẽ được giữ bí
                                mật theo chính sách bảo mật của chúng tôi.
                              </FormLabel>
                              <FormMessage className="text-red-500" />
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={legalForm.control}
                        name="newsletter"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <div className="flex-none pt-1">
                              <FormControl>
                                <input
                                  type="checkbox"
                                  className="w-5 h-5"
                                  checked={field.value}
                                  onChange={field.onChange}
                                />
                              </FormControl>
                            </div>
                            <div className="flex-grow">
                              <FormLabel className="text-sm text-gray-600 font-normal">
                                Tôi muốn nhận thông tin cập nhật về pháp lý, bản
                                tin và thông tin về các dịch vụ của Văn phòng Luật
                                sư Tùng Lâm (Tùy chọn)
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-6 hover:bg-gray-800 transition duration-300 mt-4 h-auto"
                  >
                    Gửi đơn yêu cầu
                    <Send className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-sm text-gray-500 text-center mt-4">
                    Bằng cách gửi biểu mẫu này, bạn xác nhận rằng bạn đã đọc và
                    đồng ý với Chính sách bảo mật và Điều khoản dịch vụ của
                    chúng tôi.
                  </p>
                </form>
              </Form>
            </div>

            {/* Contact Info Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Office Info Card */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="flex items-center text-xl font-bold mb-4">
                  <Building className="w-5 h-5 text-blue-600 mr-2" />
                  Thông tin văn phòng
                </h3>

                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 w-10">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Địa chỉ văn phòng
                      </h4>
                      <p className="text-gray-600">
                        399 Bình Lợi, Phường Bình Lợi Trung, Tp Hồ Chí Minh
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-10">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">SĐT liên hệ</h4>
                      <p className="text-gray-600">
                        093-857-1549 (Luật sư Lê Song Tùng)
                      </p>
                      <p className="text-gray-600">
                        0901-373-986 (Bà Lê Thị Liên)
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-10">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Email liên hệ
                      </h4>
                      <p className="text-gray-600">
                        ls_songtung@yahoo.com - Luật sư Lê Song Tùng
                      </p>
                      <p className="text-gray-600">
                        tuandungvule@gmail.com- Cộng sự Lê Anh Tuấn Dũng
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours Card */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="flex items-center text-xl font-bold mb-4">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  Giờ hành chính
                </h3>

                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="py-2">Thứ hai đến thứ 6</td>
                      <td className="py-2 text-right">8:00 sáng - 7:00 tối</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-2">Thứ bảy</td>
                      <td className="py-2 text-right">9:00 sáng - 7:00 tối</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-2">Chủ nhật</td>
                      <td className="py-2 text-right">Theo lịch Hẹn</td>
                    </tr>
                  </tbody>
                </table>

                <div className="mt-4 p-3 bg-blue-50 rounded-md">
                  <p className="text-center text-sm text-blue-700">
                    Dịch vụ khẩn cấp: Có sẵn 24/7 cho các vấn đề pháp lý khẩn
                    cấp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Information */}
          <div className="text-left lg:col-span-2 md:pl-32">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
              Thông tin liên hệ
            </h2>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Email
                  </h3>
                  <Link
                    href={`mailto:${CONTACT_INFO.email.primary.split(' - ')[0]}`}
                    className="text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline"
                  >
                    {CONTACT_INFO.email.primary}
                  </Link>
                  <br />
                  <Link
                    href={`mailto:${CONTACT_INFO.email.support.split(' - ')[0]}`}
                    className="text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline"
                  >
                    {CONTACT_INFO.email.support}
                  </Link>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <Phone className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Phone
                  </h3>
                  <Link
                    href={`tel:${CONTACT_INFO.phone.primary}`}
                    className="text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline"
                  >
                    {CONTACT_INFO.phone.label}
                  </Link>
                  <p className="text-gray-900">
                    {CONTACT_INFO.phone.phoneowner}
                  </p>
                  <Link
                    href={`tel:${CONTACT_INFO.phone.additional?.split(' ')[0]}`}
                    className="text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline"
                  >
                    {CONTACT_INFO.phone.additional}
                  </Link>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Địa chỉ Văn phòng
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {CONTACT_INFO.company.address}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {CONTACT_INFO.company.city}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                  <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    Thời gian phản hồi
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {CONTACT_INFO.responseTime.label}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 font-semibold">
                    {CONTACT_INFO.responseTime.time}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Google Maps */}
          <div className="lg:col-span-3">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={CONTACT_INFO.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Văn phòng ZenBuilder"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center space-y-2 mb-10">
            <div className="inline-block bg-blue-100 px-4 py-1 rounded-md mb-2">
              <span className="text-xl font-bold text-blue-700">CÂU HỎI</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              CÂU HỎI THƯỜNG GẶP
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những câu hỏi phổ biến về dịch vụ pháp lý của chúng tôi
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="border rounded-lg px-4 shadow-sm"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                  <span>Tư vấn có tốn phí không?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Chúng tôi cung cấp tư vấn ban đầu miễn phí cho hầu hết các lĩnh
                vực thực hành. Trong cuộc họp kéo dài 30 phút này, chúng tôi sẽ
                thảo luận về vấn đề pháp lý của bạn, giải thích các lựa chọn của
                bạn và đưa ra đánh giá trung thực về trường hợp của bạn.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border rounded-lg px-4 shadow-sm"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                  <span>Thời gian phản hồi yêu cầu trong bao lâu?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Chúng tôi thường phản hồi form trong vòng 24 giờ trong ngày làm
                việc. Đối với các vấn đề khẩn cấp, chúng tôi cung cấp phản hồi
                trong ngày và tư vấn khẩn cấp. Nếu bạn có vấn đề pháp lý khẩn
                cấp, vui lòng gọi đến đường dây chính của chúng tôi và nêu rõ
                rằng đó là vấn đề khẩn cấp.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border rounded-lg px-4 shadow-sm"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                  <span>
                    Tôi cần đem theo thông tin/hồ sơ gì theo trong lúc tư vấn?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Vui lòng mang theo bất kỳ tài liệu nào có liên quan đến vấn đề
                pháp lý của bạn, chẳng hạn như hợp đồng, thư từ, giấy tờ của tòa
                án hoặc hồ sơ y tế. Ngoài ra, hãy chuẩn bị một danh sách các câu
                hỏi bạn muốn hỏi và dòng thời gian của các sự kiện. Đừng lo lắng
                nếu bạn không có mọi thứ - chúng tôi có thể giúp bạn xác định
                thông tin bổ sung nào có thể cần thiết.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border rounded-lg px-4 shadow-sm"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                  <span>
                    Dịch vụ có làm việc với khách hàng bên ngoài khu vực địa
                    phương không?
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Mặc dù hoạt động chính của chúng tôi là ở Tp Hồ Chí Minh, chúng
                tôi có thể làm việc với cố vấn địa phương có trình độ ở các khu
                vực pháp lý khác khi cần thiết. Hãy liên hệ với chúng tôi để
                thảo luận về tình huống cụ thể của bạn và chúng tôi sẽ cho bạn
                biết cách chúng tôi có thể giúp bạn.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border rounded-lg px-4 shadow-sm"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0" />
                  <span>Cấu trúc chi phí dịch vụ?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Cấu trúc phí của chúng tôi thay đổi tùy thuộc vào loại vụ án và
                mức độ phức tạp. Chúng tôi cung cấp mức phí theo giờ, phí cố
                định cho một số dịch vụ nhất định và phí theo điều kiện cho các
                vụ thương tích cá nhân. Chúng tôi sẽ thảo luận về tất cả các
                khoản phí và tùy chọn thanh toán trong buổi tư vấn ban đầu của
                bạn, đảm bảo tính minh bạch hoàn toàn.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-12 lg:py-16" id="appointment">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6">
              {cta.heading.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              {cta.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {cta.buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-colors ${
                    button.variant === "primary"
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-600"
                  }`}
                >
                  {button.icon && <button.icon className="w-5 h-5 mr-2" />}
                  {button.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

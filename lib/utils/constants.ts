import { 
  Scale, 
  Zap, 
  HeartHandshake, 
  Award, 
  Target, 
  BriefcaseBusiness, 
  Handshake, 
  Users,
  FileText,
  Rocket,
  Globe,
  GraduationCap,
  Monitor,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
} from 'lucide-react';

// Hero Section Data
export const heroData = {
  badge: {
    icon: Scale,
    text: "12+ năm trong lĩnh vực hành nghề"
  },
  heading: {
    title: "Luật sư Đồng hành, Giải pháp Vững chắc",
    description1: "Văn phòng luật sư Tùng Lâm thuộc Đoàn luật sư Thành phố Hồ Chí Minh được thành lập theo Giấy phép đăng ký hoạt động số 41.01.1844/TP-ĐKHĐ do Sở Tư pháp Thành phố Hồ Chí Minh cấp lần 1 ngày 24/12/2012.",
    description2: "Hiện nay, từ ngày 24/9/2025 Văn phòng luật sư Tùng Lâm được Sở Tư pháp Thành phố Hồ Chí Minh cấp Giấy đăng ký hoạt động số 79.2012.01.1844/TP/ĐKHĐ.",
    description3: "Văn phòng đã đảm nhận bào chữa và bảo vệ quyền lợi hợp pháp của khách hàng trong rất nhiều các vụ án hình sự và phi hình sự tại Tòa án trong cả nước. Ngoài ra, Văn phòng còn đại diện ngoài tố tụng, tư vấn pháp lý cho nhiều doanh nghiệp và cá nhân để bảo vệ quyền và lợi ích hợp pháp cho họ.",
    description4: "Với luật sư giỏi chuyên môn, giàu kinh nghiệm, tận tâm và tuân thủ đạo đức nghề nghiệp luật sư; Văn phòng luật sư Tùng Lâm đã tạo được niềm tin và sự hài lòng cho Quý Khách hàng khi đến với Văn phòng.",
    description5: "Với phương châm “Xuất sắc trong tố tụng, chính trực trong mọi hành động”, Văn phòng luật sư Tùng Lâm luôn sẵn sàng là người hộ vệ pháp lý đối với Quý Khách hàng."
  },
  buttons: [
    {
      href: "/contact",
      text: "ĐẶT LỊCH HẸN",
      icon: Calendar,
      variant: "primary" as const
    },
    {
      href: "/activity",
      text: "Tham khảo dịch vụ",
      variant: "secondary" as const
    }
  ],
  features: [
    {
      icon: BriefcaseBusiness,
      title: "Chuyên nghiệp",
      description: "12+ năm trong lĩnh vực hành nghề"
    },
    {
      icon: Users,
      title: "Tận tâm",
      description: "Tận tâm vì Lợi ích Khách hàng"
    },
    {
      icon: Clock,
      title: "Dịch vụ Pháp lý Liên tục (24/7)",
      description: "Luật sư Luôn đồng hành, kể cả ngoài giờ hành chính"
    }
  ]
};

// Core Values Section Data
export const coreValuesData = {
  badge: {
    icon: Target,
    text: "Giá trị cốt lõi"
  },
  heading: {
    title: "Xuất sắc trong tố tụng,",
    subtitle: "Chính trực trong mọi hành động",
    description: "Với phương châm “Xuất sắc trong tố tụng, chính trực trong mọi hành động”, Văn phòng luật sư Tùng Lâm kết hợp kinh nghiệm pháp lý vững chắc xây dựng trong suốt một thập kỷ qua với các giải pháp tiếp cận sáng tạo để mang lại những kết quả pháp lý vượt trội. Chúng tôi luôn sẵn sàng là người hộ vệ pháp lý đáng tin cậy của Quý Khách hàng."
  },
  cards: [
    {
      icon: Zap,
      title: "Hướng đến sự hiệu quả",
      description: "Bằng cách kết hợp tư duy chiến lược với khả năng thực thi vụ việc hiệu quả, chúng tôi cam kết đạt được kết quả vượt trội cho khách hàng.",
      link: {
        href: "#",
        text: "Hiệu quả cao",
        icon: Zap
      }
    },
    {
      icon: HeartHandshake,
      title: "Tận tâm vì Lợi ích Khách hàng",
      description: "Mỗi khách hàng đều xứng đáng nhận được sự quan tâm cá nhân và chiến lược pháp lý được thiết kế riêng biệt cho hoàn cảnh độc nhất của họ.",
      link: {
        href: "#",
        text: "Hỗ trợ 24/7",
        icon: Users
      }
    },
    {
      icon: Scale,
      title: "Chính trực nghề nghiệp",
      description: "Chúng tôi duy trì các tiêu chuẩn đạo đức cao nhất đồng thời cung cấp thông tin liên lạc minh bạch trong suốt quá trình xử lý vụ việc của bạn.",
      link: {
        href: "#",
        text: "Đạo đức nghề nghiệp",
        icon: Award
      }
    }
  ]
};

// Services Section Data
export const servicesData = {
  badge: {
    icon: FileText,
    text: "Lĩnh vực hành nghề"
  },
  heading: {
    title: "Dịch vụ pháp lý toàn diện",
    subtitle: "Trên tất cả các lĩnh vực hành nghề",
    description: "Từ Hợp đồng giao dịch phức tạp đến Khiếu nại Dân sự và Bào chữa Hình sự, Văn phòng Luật sư Tùng Lâm cung cấp dịch vụ đại diện chuyên sâu trên mọi lĩnh vực pháp luật."
  },
  services: [
    {
      icon: BriefcaseBusiness,
      title: "Tham gia tố tụng theo quy định của pháp luật",
      description: "Văn phòng Luật sư Tùng Lâm cung cấp dịch vụ đại diện và tham gia tố tụng chuyên nghiệp tại các cấp Tòa án và Cơ quan Nhà nước có thẩm quyền. Với kinh nghiệm dày dạn và nắm vững quy định pháp luật, chúng tôi cam kết bảo vệ tối đa quyền và lợi ích hợp pháp của khách hàng theo đúng trình tự và thủ tục do pháp luật quy định.",
      href: "/activity/corporate",
      buttonText: "Tham khảo về dịch vụ"
    },
    {
      icon: Users,
      title: "Tư vấn pháp luật",
      description: "Văn phòng Luật sư Tùng Lâm cung cấp dịch vụ Tư vấn Pháp luật chuyên sâu và toàn diện trên mọi lĩnh vực, văn phòng Luật sư Tùng Lâm lắng nghe, phân tích kỹ lưỡng các vấn đề của khách hàng và đưa ra ý kiến pháp lý rõ ràng, chính xác, giúp khách hàng nắm bắt rủi ro và đưa ra quyết định kinh doanh/cá nhân sáng suốt trong khuôn khổ pháp luật.",
      href: "/activity/civil",
      buttonText: "Tham khảo về Luật Dân sự"
    },
    {
      icon: Handshake,
      title: "Đại diện theo ủy quyền",
      description: "Văn phòng Luật sư Tùng Lâm cung cấp dịch vụ Đại diện pháp lý theo ủy quyền, giúp quý khách hàng giải quyết mọi vấn đề pháp lý phức tạp trong tố tụng. Văn phòng Luật sư Tùng Lâm đại diện trong các giao dịch, đàm phán hợp đồng, và thực hiện thủ tục hành chính phức tạp, đảm bảo mọi vấn đề được xử lý chính xác, nhanh chóng và đạt được mục tiêu của khách hàng một cách hiệu quả nhất.",
      href: "/activity/family",
      buttonText: "Tìm hiểu về Dịch vụ Đại diện theo ủy quyền"
    },
    {
      icon: Scale,
      title: "Dịch vụ pháp lý",
      description: "Văn phòng Luật sư Tùng Lâm cung cấp Dịch vụ pháp lý toàn diện được thiết kế để bảo vệ và tối đa hóa lợi ích của khách hàng. Các dịch vụ pháp lý chuyên sâu của chúng tôi bao gồm: Tư vấn Chiến lược, Đại diện ngoài Tố tụng trong đàm phán, giao dịch, và Tham gia Tố tụng chuyên nghiệp tại các cấp Tòa án. Văn phòng cam kết hành nghề chính trực và hiệu quả tối ưu trong mọi lĩnh vực.",
      href: "/activity/real-estate",
      buttonText: "Tham khảo về dịch vụ pháp lý"
    }
  ],
  cta: {
    href: "/activity",
    text: "Tham khảo lĩnh vực hành nghề"
  }
};

// Value Proposition Section Data
export const valuePropositionData = {
  badge: {
    icon: Rocket,
    text: "Dịch vụ khác"
  },
  heading: {
    title: "Không chỉ là dịch vụ pháp lý",
    description: "Là luật sư hành nghề, chúng tôi hiểu những thách thức mà các công ty luật hiện đại phải đối mặt. Đó là lý do tại sao chúng tôi mở rộng dịch vụ của mình để bao gồm phát triển web chuyên nghiệp và giáo dục pháp lý - giúp bạn thành công trong thế giới kỹ thuật số ngày nay."
  },
  features: [
    {
      icon: Globe,
      title: "Dịch vụ Website chuyên nghiệp",
      description: "Các trang web tùy chỉnh được thiết kế riêng cho các cá nhân tổ chức và dịch vụ pháp lý, công ty với thiết kế hiện đại, tối ưu hóa SEO và quản trị pháp lý."
    },
    {
      icon: GraduationCap,
      title: "Lớp học và khóa học đào tạo nghiệp vụ pháp lý",
      description: "Các khóa học chuyên nghiệp về lập học nghiệp và đào tạo pháp lý nhằm giúp sinh viên nắm bắt đầy đủ các kiến thức cần thiết để giỏi kinh nghiệm gáng đây chủ các."
    }
  ],
  buttons: [
    {
      href: "/services/website",
      text: "Đến dịch vụ Website",
      icon: Globe,
      variant: "primary" as const
    },
    {
      href: "/course",
      text: "Tham khảo khóa học",
      icon: BookOpen,
      variant: "secondary" as const
    }
  ],
  stats: [
    {
      icon: Monitor,
      title: "50+ Websites mẫu",
      description: "Xây dựng cho đa ngành nghề"
    },
    {
      icon: Users,
      title: "Học viên",
      description: "Được đào tạo và hướng dẫn"
    },
    {
      icon: Award,
      title: "25+ Khóa học",
      description: "Chương trình hành nghề Luật"
    }
  ]
};

// Blog Section Data
export const blogData = {
  badge: {
    icon: BookOpen,
    text: "Blog tham khảo"
  },
  heading: {
    title: "Blog cập nhật gần đây nhất",
    description: "Cập nhật những blog thông tin mới nhất về pháp luật, nghiên cứu tình huống và các cập nhật quan trọng về pháp lý nhà nước. Ngoài ra, Blog cũng cập nhật các bài viết liên quan đến các dịch vụ mà văn phòng đương nhiệm."
  },
  cta: {
    href: "/blog",
    text: "Đến trang Blog"
  },
  posts: [
    {
      id: 1,
      image: "/no_image.jpg",
      category: {
        icon: Scale,
        text: "Luật doanh nghiệp"
      },
      title: "Thành lập doanh nghiệp: Công ty TNHH hay Công ty cổ phần - Loại nào phù hợp với bạn?",
      description: "So sánh chi tiết các cơ cấu doanh nghiệp để giúp các doanh nhân lựa chọn giải pháp tốt nhất cho nhu cầu và mục tiêu cụ thể của mình.",
      author: "Luật sư Lê Song Tùng",
      readTime: "6 phút",
      date: "Ngày 5 tháng 6 năm 2025",
      href: "/blog/thanh-lap-doanh-nghiep"
    },
    {
      id: 2,
      image: "/no_image.jpg",
      category: {
        icon: Scale,
        text: "Luật doanh nghiệp"
      },
      title: "Thành lập doanh nghiệp: Công ty TNHH hay Công ty cổ phần - Loại nào phù hợp với bạn?",
      description: "So sánh chi tiết các cơ cấu doanh nghiệp để giúp các doanh nhân lựa chọn giải pháp tốt nhất cho nhu cầu và mục tiêu cụ thể của mình.",
      author: "Luật sư Lê Song Tùng",
      readTime: "6 phút",
      date: "Ngày 5 tháng 6 năm 2025",
      href: "/blog/thanh-lap-doanh-nghiep"
    },
    {
      id: 3,
      image: "/no_image.jpg",
      category: {
        icon: Scale,
        text: "Luật doanh nghiệp"
      },
      title: "Thành lập doanh nghiệp: Công ty TNHH hay Công ty cổ phần - Loại nào phù hợp với bạn?",
      description: "So sánh chi tiết các cơ cấu doanh nghiệp để giúp các doanh nhân lựa chọn giải pháp tốt nhất cho nhu cầu và mục tiêu cụ thể của mình.",
      author: "Luật sư Lê Song Tùng",
      readTime: "6 phút",
      date: "Ngày 5 tháng 6 năm 2025",
      href: "/blog/thanh-lap-doanh-nghiep"
    }
  ]
};

// Contact Section Data
export const contactData = {
  badge: {
    icon: Phone,
    text: "Liên hệ hôm nay"
  },
  heading: {
    title: "Bạn đã sẵn sàng thảo luận",
    subtitle: "về vấn đề pháp lý của bạn ?",
    description: "Hãy liên hệ với chúng tôi ngay hôm nay để đặt lịch hẹn tư vấn. Văn phòng Luật sư Tùng Lâm sẵn sàng cung cấp hướng dẫn chuyên môn pháp lý và sự đại diện tích cực mà bạn xứng đáng được hưởng."
  },
  contactInfo: [
    {
      icon: Phone,
      title: "Liên hệ chúng tôi",
      details: [
        "Luật sư Lê Song Tùng - Trưởng văn phòng 0938571549",
        "Bà Lê Thị Liên - 0901373986"
      ]
    },
    {
      icon: Mail,
      title: "Email liên hệ",
      details: [
        "ls.songtung@yahoo.com - Luật sư Lê Song Tùng",
        "vanphongluatsutunglam@gmail.com - Văn phòng Luật sư Tùng Lâm",
        "Tuandungvuive@gmail.com- Cộng sự Lê Anh Tuấn Dũng"
      ]
    },
    {
      icon: MapPin,
      title: "Địa chỉ văn phòng",
      details: [
        "399 Bình Lợi, phường Bình Lợi Trung,Thành phố Hồ Chí Minh (Văn phòng Luật sư Tùng Lâm)"
      ]
    }
  ],
  buttons: [
    {
      href: "/contact",
      text: "Đặt lịch hẹn",
      icon: Calendar,
      variant: "primary" as const
    },
    {
      href: "/contact",
      text: "Liên hệ chúng tôi",
      variant: "secondary" as const
    }
  ],
  form: {
    title: "Form liên hệ nhanh",
    fields: {
      name: {
        label: "Họ và tên",
        placeholder: ""
      },
      email: {
        label: "Email",
        placeholder: "info@email.com"
      },
      phone: {
        label: "Số điện thoại",
        placeholder: "0903874986"
      },
      message: {
        label: "Mô tả ngắn gọn về vấn đề pháp lý của bạn",
        placeholder: "Type your message..."
      }
    },
    submitButton: {
      text: "Gửi tin nhắn",
      icon: Mail
    }
  }
};

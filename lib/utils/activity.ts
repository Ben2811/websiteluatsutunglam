import {
  Scale,
  Calendar,
  FileText,
  Users,
  CheckCircle,
  Phone,
  Mail,
  BriefcaseBusiness,
  ArrowLeft,
  Handshake,
  ShieldCheck,
  BookOpen,
  Heart,
  Shield,
  Landmark,
  Lightbulb,
  SearchCheck,
  FilePen,
  Home,
  Building2,
  MapPin,
  FileCheck,
  ClipboardList,
  User2,
  HandCoins,
  ShieldUser,
  Gavel,
  ScrollTextIcon,
  HouseIcon,
  FileBadge,
  HeartHandshakeIcon,
  FilePenIcon,
  HeartHandshake,
} from 'lucide-react';
import { servicesData } from './constants';

// Activity Page Data
export const activityData = {
  hero: {
    badge: {
      icon: Scale,
      text: "Văn phòng Luật sư Tùng Lâm"
    },
    heading: {
      title: "Hoạt động hành nghề tại",
      subtitle: "Văn phòng Luật sư Tùng Lâm"
    },
    description: "Văn phòng Luật sư Tùng Lâm cung cấp dịch vụ pháp lý toàn diện, chuyên cung cấp các giải pháp pháp lý trong khuôn khổ pháp luật Việt Nam. Điểm khác biệt của chúng tôi là sự kết hợp nhuần nhuyễn giữa kiến thức pháp luật chuyên sâu và kinh nghiệm kinh doanh thực tiễn, cam kết mang lại những kết quả vượt trội và tối ưu hóa lợi ích thương mại cho mọi khách hàng.",
    buttons: [
      {
        href: "/contact",
        text: "Đặt lịch hẹn",
        icon: Calendar,
        variant: "primary" as const
      },
      {
        href: "/contact",
        text: "Gặp gỡ đội ngũ chúng tôi",
        variant: "secondary" as const
      }
    ]
  },
  services: {
    badge: {
      icon: FileText,
      text: "Lĩnh vực hành nghề"
    },
    heading: {
      title: "Tổng quan về hoạt động hành nghề"
    },
    description: "Văn phòng chúng tôi cung cấp các dịch vụ pháp lý toàn diện, đáp ứng mọi nhu cầu đa dạng từ cá nhân, gia đình đến doanh nghiệp. Mỗi lĩnh vực hành nghề đều được đảm nhận bởi luật sư chuyên môn sâu, đảm bảo chất lượng dịch vụ ở mức cao nhất.",
    practiceAreas: servicesData.services
  },
  whyChooseUs: {
    heading: {
      title: "Tại sao bạn nên chọn văn phòng Luật sư Tùng Lâm"
    },
    description: "Với cách tiếp cận toàn diện, thành tích đã được chứng minh và cam kết phục vụ khách hàng, chúng tôi là lựa chọn hoàn hảo cho mọi nhu cầu pháp lý của bạn trên mọi lĩnh vực hành nghề.",
    features: [
      {
        icon: Scale,
        title: "12 năm kinh nghiệm hành nghề",
        description: "Cả thập kỷ xây dựng kinh nghiệm pháp lý kết hợp trên mọi lĩnh vực thực hành với kết quả đã được chứng minh."
      },
      {
        icon: Users,
        title: "Khách hàng làm trọng tâm",
        description: "Sự quan tâm cá nhân và các chiến lược pháp lý được thiết kế riêng theo nhu cầu của từng khách hàng."
      },
      {
        icon: CheckCircle,
        title: "Kết quả minh bạch",
        description: "Kết quả thành công và khách hàng hài lòng với kết quả đạt được ở các vụ việc đã giải quyết."
      },
      {
        icon: Phone,
        title: "Hỗ trợ 24/7",
        description: "Luôn sẵn sàng hỗ trợ khi bạn cần tư vấn pháp lý, bao gồm cả tư vấn khẩn cấp."
      }
    ]
  },
  cta: {
    heading: {
      title: "BẠN CẦN TƯ VẤN/ GIẢI QUYẾT VẤN ĐỀ PHÁP LÝ ?"
    },
    description: "Hãy để chúng tôi đồng hành cùng bạn. Chúng tôi cam kết cung cấp sự đại diện pháp lý tận tâm cùng hướng dẫn chuyên sâu mà khách hàng xứng đáng nhận được. Hãy gọi cho chúng tôi ngay để bắt đầu buổi tư vấn.",
    buttons: [
      {
        href: "https://zalo.me/0938571549",
        text: "0938571549 - Luật sư Lê Song Tùng",
        icon: Phone,
        variant: "primary" as const
      },
      {
        href: "/contact",
        text: "Đặt lịch hẹn tư vấn pháp lý",
        icon: Mail,
        variant: "secondary" as const
      }
    ]
  }
};

// Corporate Law Page Data
export const corporateLawData = {
  backLink: {
    href: "/activity",
    text: "Quay lại trang hoạt động hành nghề",
    icon: ArrowLeft
  },
  hero: {
    icon: BriefcaseBusiness,
    title: "Tham gia tố tụng theo quy định của pháp luật",
    badge: "12+ năm kinh nghiệm hành nghề",
    description: "Văn phòng Luật sư Tùng Lâm cung cấp dịch vụ đại diện và tham gia tố tụng chuyên nghiệp tại các cấp Tòa án và Cơ quan Nhà nước có thẩm quyền. Với kinh nghiệm dày dạn và nắm vững quy định pháp luật, chúng tôi cam kết bảo vệ tối đa quyền và lợi ích hợp pháp của khách hàng theo đúng trình tự và thủ tục do pháp luật quy định.",
    buttons: [
      {
        href: "https://zalo.me/0938571549",
        text: "Đặt lịch hẹn",
        icon: Phone,
        variant: "primary" as const
      },
      {
        href: "/activity",
        text: "Tham khảo trang dịch vụ hành nghề",
        variant: "secondary" as const
      }
    ]
  },
  mainContent: {
    icon: BriefcaseBusiness,
    title: "Tham gia tố tụng theo quy định của pháp luật",
    description: [
      "Tố tụng là trình tự, thủ tục do pháp luật quy định nhằm giải quyết các tranh chấp, vi phạm pháp luật phát sinh trong các lĩnh vực dân sự, hình sự và hành chính tại cơ quan nhà nước có thẩm quyền.",
      "Chủ thể tham gia tố tụng được xác định dựa trên tính chất của quan hệ pháp luật và lĩnh vực pháp luật cụ thể.",
      "Việc tham gia tố tụng của người đại diện của đương sự trong tố tụng dân sự có ý nghĩa rất lớn đối với việc giải quyết các vụ án dân sự, đặc biệt trong trường hợp đương sự không tự thực hiện các quyền và nghĩa vụ tố tụng của mình. Những quy định về người đại diện của đương sự được quy định tại Bộ luật Dân sự năm 2015.",
      "Người đại diện của đương sự tham gia tố tụng dân sự là người thay mặt đương sự thực hiện các quyền, nghĩa vụ tố tụng để bảo vệ quyền và lợi ích hợp pháp cho đương sự trước Tòa án.",
      "Căn cứ Điều 85 của Bộ luật Tố tụng Dân sự năm 2015: “Người đại diện trong tố tụng dân sự bao gồm người đại diện theo pháp luật và người đại diện theo ủy quyền. Người đại diện có thể là cá nhân hoặc pháp nhân theo quy định của Bộ luật Dân sự.”",
      "Dựa vào vào ý chí của đương sự, pháp luật tố tụng dân sự hiện hành chia người đại diện thành hai loại: Người đại diện theo pháp luật và người đại diện theo uỷ quyền. Ngoài ra, người đại diện trong tố tụng dân sự còn có thể do Tòa án chỉ định.",
      "Thông qua đó, Luật sư tại văn phòng Luật sư Tùng Lâm tham gia tố tụng tại Tòa án các cấp với tư cách là:",
      "* Người bào chữa cho người bị tạm giữ, bị can, bị cáo hoặc là Người bảo vệ quyền lợi của người bị hại, nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan trong vụ án tố tụng.",
      "* Người đại diện hoặc là người bảo vệ quyền, lợi ích hợp pháp của nguyên đơn, bị đơn, người có quyền lợi, nghĩa vụ liên quan trong các vụ án về tranh chấp dân sự, hôn nhân và gia đình, kinh doanh, thương mại, lao động, hành chính, việc về yêu cầu dân sự, hôn nhân và gia đình, kinh doanh, thương mại, lao động và các vụ, việc khác theo quy định của pháp luật."

    ]
  },
  professionalAreas: {
    title: "Lĩnh vực hành nghề",
    icon: BriefcaseBusiness,
    areas: [
      { icon: Users, title: "Tố tụng dân sự" },
      { icon: Scale, title: "Tố tụng hình sự" },
      { icon: Landmark, title: "Tố tụng hành chính" },
      { icon: FileText, title: "Tranh chấp hợp đồng" },
      { icon: Lightbulb, title: "Tranh chấp về quyền sở hữu trí tuệ" },
      { icon: SearchCheck, title: "Xem xét, nghiên cứu hồ sơ vụ án" },
      { icon: BookOpen, title: "Tư vấn về các quy trình, thủ tục tố tụng" },
      { icon: Shield, title: "Người bảo vệ quyền và lợi ích hợp pháp của đương sự" },
      { icon: Handshake, title: "Người bào chữa cho quyền và lợi ích hợp pháp của đương sự " },
      { icon: FilePen, title: "Soạn thảo hồ sơ liên quan đến tố tụng" }
    ]
  },
  sidebar: {
    contact: {
      icon: Phone,
      title: "Bạn cần trợ giúp về tố tụng?",
      description: "Hãy liên hệ với chúng tôi ngay hôm nay để đặt lịch hẹn tư vấn về vấn đề pháp lý của bạn.",
      buttons: [
        {
          href: "https://zalo.me/0938571549",
          text: "0938571549",
          icon: Phone,
          variant: "primary" as const
        },
        {
          href: "mailto:vanphongluatsutunglam@gmail.com",
          text: "Email chúng tôi",
          icon: Mail,
          variant: "secondary" as const
        }
      ]
    },
    specialties: {
      title: "Lĩnh vực chuyên môn",
      icon: FileText,
      items: [
        {
          title: "Đại diện tố tụng",
          description: "Trong các vụ án hình sự, dân sự, lao động, thương mại và các tranh chấp về sở hữu trí tuệ."
        },
        {
          title: "Người bào chữa/bảo vệ quyền lợi ",
          description: "Bảo vệ quyền lợi của người bị hại, nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan trong vụ án tố tụng."
        },
        {
          title: "Người đại diện bảo vệ quyền, lợi ích hợp pháp ",
          description: "Đại diện bảo vệ quyền, lợi ích hợp pháp của nguyên đơn, bị đơn, người có quyền lợi, nghĩa vụ liên quan trong các vụ án tranh chấp/ tố tụng."
        },
        {
          title: "Tư vấn về các quy trình, thủ tục tố tụng",
          description: "Tư vấn về trình tự, thủ tục giải quyết vụ án tố tụng theo quy định của Pháp luật. Giải đáp thắc mắc liên quan đến pháp lý trong các giai đoạn và thủ tục trong Tố tụng."
        }
      ]
    },
    relatedAreas: {
      title: "Các lĩnh vực liên quan",
      links: [
        {
          href: "/activity/family",
          text: "Đại diện ngoài tố tụng"
        },
        {
          href: "/activity/civil",
          text: "Tư vấn pháp luật"
        }
      ]
    }
  },
  services: {
    title: "Dịch vụ luật tham gia tố tụng tại văn phòng chúng tôi",
    items: [
      {
        icon: BriefcaseBusiness,
        title: "Đại diện tố tụng",
        description: "Trong các vụ án hình sự, dân sự, lao động, thương mại và các tranh chấp về sở hữu trí tuệ."
      },
      {
        icon: Handshake,
        title: "Người bào chữa/bảo vệ quyền lợi",
        description: "Bảo vệ quyền lợi của người bị hại, nguyên đơn dân sự, bị đơn dân sự, người có quyền lợi, nghĩa vụ liên quan trong vụ án tố tụng."
      },
      {
        icon: ShieldCheck,
        title: "Người đại diện bảo vệ quyền, lợi ích hợp pháp",
        description: "Đại diện bảo vệ quyền, lợi ích hợp pháp của nguyên đơn, bị đơn, người có quyền lợi, nghĩa vụ liên quan trong các vụ án tranh chấp/ tố tụng."
      },
      {
        icon: FileText,
        title: "Tư vấn về các quy trình, thủ tục tố tụng",
        description: "Tư vấn về trình tự, thủ tục giải quyết vụ án tố tụng theo quy định của Pháp luật. Giải đáp thắc mắc liên quan đến pháp lý trong các giai đoạn và thủ tục trong Tố tụng."
      }
    ]
  }
};

// Family Law Page Data
export const familyLawData = {
  backLink: {
    href: "/activity",
    text: "Quay lại trang hoạt động hành nghề",
    icon: ArrowLeft
  },
  hero: {
    icon: HeartHandshake,
    title: "Đại diện theo ủy quyền",
    badge: "12+ năm kinh nghiệm hành nghề",
    description: "Văn phòng Luật sư Tùng Lâm cung cấp dịch vụ Đại diện pháp lý theo ủy quyền, giúp quý khách hàng giải quyết mọi vấn đề pháp lý phức tạp trong tố tụng. Văn phòng Luật sư Tùng Lâm đại diện trong các giao dịch, đàm phán hợp đồng, và thực hiện thủ tục hành chính phức tạp, đảm bảo mọi vấn đề được xử lý chính xác, nhanh chóng và đạt được mục tiêu của khách hàng một cách hiệu quả nhất.",
    buttons: [
      {
        href: "https://zalo.me/0938571549",
        text: "Đặt lịch hẹn",
        icon: Phone,
        variant: "primary" as const
      },
      {
        href: "/contact",
        text: "Tham khảo trang hoạt động hành nghề",
        variant: "secondary" as const
      }
    ]
  },
  mainContent: {
    icon: HeartHandshake,
    title: "Đại diện theo ủy quyền",
    description: [
      "Pháp nhân, bao gồm các tổ chức hành nghề luật sư, thực hiện dịch vụ đại diện theo ủy quyền trong tố tụng dân sự ngày càng phổ biến và đóng vai trò quan trọng trong việc bảo vệ quyền, lợi ích hợp pháp của đương sự. Trong thực tiễn pháp lý, đại diện theo ủy quyền của luật sư là trường hợp một cá nhân, tổ chức ủy quyền hợp pháp cho luật sư thay mặt mình thực hiện các công việc pháp lý – như tham gia tố tụng, làm việc với cơ quan nhà nước, ký văn bản pháp lý... nhằm bảo vệ quyền và lợi ích hợp pháp cho người ủy quyền.",
      "Theo quy định của Bộ luật Dân sự 2015, đây là một dạng quan hệ đại diện theo ủy quyền, trong đó người ủy quyền (thường là cá nhân hoặc pháp nhân có đầy đủ năng lực hành vi dân sự) lập giấy ủy quyền hoặc hợp đồng ủy quyền để giao cho luật sư thay mặt mình thực hiện một hoặc nhiều công việc nhất định.",
      "Theo Điều 135 Bộ luật Dân sự 2015 quy định về căn cứ xác lập quyền đại diện như sau:Quyền đại diện được xác lập theo ủy quyền giữa người được đại diện và người đại diện (sau đây gọi là đại diện theo ủy quyền); theo quyết định của cơ quan nhà nước có thẩm quyền, theo điều lệ của pháp nhân hoặc theo quy định của pháp luật (sau đây gọi chung là đại diện theo pháp luật).”",
      "Điều 138 Bộ luật Dân sự 2015 quy định về việc đại diện theo ủy quyền, cụ thể:",
      "- Cá nhân, pháp nhân có thể ủy quyền cho cá nhân, pháp nhân khác xác lập, thực hiện giao dịch dân sự.",
      "- Các thành viên hộ gia đình, tổ hợp tác, tổ chức khác không có tư cách pháp nhân có thể thỏa thuận cử cá nhân, pháp nhân khác đại diện theo ủy quyền xác lập, thực hiện giao dịch dân sự liên quan đến tài sản chung của các thành viên hộ gia đình, tổ hợp tác, tổ chức khác không có tư cách pháp nhân.", 
      "- Người từ đủ mười lăm tuổi đến chưa đủ mười tám tuổi có thể là người đại diện theo ủy quyền, trừ trường hợp pháp luật quy định giao dịch dân sự phải do người từ đủ mười tám tuổi trở lên xác lập, thực hiện.",
      "Theo Khoản 2 Điều 75 về “Người bảo vệ quyền và lợi ích hợp pháp của đương sự” BLTTDS năm 2015 quy định các chủ thể được làm người bảo vệ quyền và lợi ích hợp pháp của đương sự, ghi nhận “luật sư”, “Trợ giúp viên pháp lý hoặc người tham gia trợ giúp pháp lý theo quy định của pháp luật về trợ giúp pháp lý”; “Đại diện của tổ chức đại diện tập thể lao động là người bảo vệ quyền và lợi ích hợp pháp của người lao động trong vụ việc lao động theo quy định của pháp luật về lao động, công đoàn”; “Công dân Việt Nam có năng lực hành vi dân sự đầy đủ, không có án tích hoặc đã được xóa án tích, không thuộc trường hợp đang bị áp dụng biện pháp xử lý hành chính; không phải là cán bộ, công chức trong các cơ quan Tòa án, Viện kiểm sát và công chức, sĩ quan, hạ sĩ quan trong ngành Công an”, đều có thể là người bảo vệ quyền và lợi ích hợp pháp cho đương sự trong vụ án dân sự.",
      "Theo quy định tại Điều 85 về “Người đại diện”, BLTTDS năm 2015, ngoại trừ việc ly hôn, các trường hợp khác, đương sự có quyền ủy quyền cho cá nhân khác làm người đại diện theo ủy quyền để thực hiện quyền, nghĩa vụ tố tụng của đương sự theo nội dung văn bản ủy quyền. BLDS năm 2015 quy định cá nhân, tổ chức có thể ủy quyền cho cá nhân khác làm đại diện theo ủy quyền để xác lập, thực hiện giao dịch dân sự trong phạm vi ủy quyền của mình.heo quy định này, những người bảo vệ quyền và lợi ích hợp pháp cho đương sự đều có quyền nhận ủy quyền làm đại diện cho chính đương sự đó.",
      "Với vai trò là người đại diện theo ủy quyền,Văn phòng Luật sư Tùng Lâm sẽ đại diện cho Quý Khách hàng để giải quyết các công việc khác có liên quan đến việc mà luật sư đã nhận theo phạm vi, nội dung được ghi trong Hợp đồng dịch vụ pháp lý với khách hàng.Đại diện cho khách hàng để giải quyết các công việc khác có liên quan đến việc mà luật sư đã nhận theo phạm vi, nội dung được ghi trong Hợp đồng dịch vụ pháp lý với khách hàng."
    ]
  },
  professionalAreas: {
    title: "Lĩnh vực đại diện",
    icon: Users,
    areas: [
      { icon: FileText, title: "Tranh chấp dân sự" },
      { icon: Users, title: "Tranh chấp Kinh doanh - Thương mại " },
      { icon: FileText, title: "Tranh chấp Đất đai" },
      { icon: ShieldCheck, title: "Tranh chấp Lao động" },
      { icon: FileText, title: "Thủ tục Hành chính" },
      { icon: ShieldCheck, title: "Đàm phán và thực hiện giao dịch" },
      { icon: FileText, title: "Soạn thảo hợp đồng" },
      { icon: Users, title: "Đại diện cho Doanh nghiệp" },
      { icon: FileText, title: "Đại diện theo ủy quyền để bảo vệ quyền và lợi ích hợp pháp" },
      { icon: Users, title: "Đại diện ủy quyền để khiếu nại, khởi kiện theo quy định của pháp luật" }
    ]
  },
  sidebar: {
    contact: {
      icon: Phone,
      title: "Bạn cần trợ giúp về Đại diện theo ủy quyền?",
      description: "Hãy liên hệ với chúng tôi ngay hôm nay để đặt lịch hẹn tư vấn về vấn đề pháp lý của bạn.",
      buttons: [
        {
          href: "https://zalo.me/0938571549",
          text: "0938571549",
          icon: Phone,
          variant: "primary" as const
        },
        {
          href: "/contact",
          text: "Email chúng tôi",
          icon: Mail,
          variant: "secondary" as const
        }
      ]
    },
    specialties: {
      title: "Dịch vụ ủy quyền",
      icon: FileText,
      items: [
        {
          title: "Đại diện ủy quyền trong các giao dịch nhà đất",
          description: "Phân chia tài sản phức tạp liên quan đến tài sản trước hôn nhân"
        },
        {
          title: "Đại diện ủy quyền trong các giao dịch dân sự",
          description: "Các trường hợp tranh chấp quyền nuôi con và quyền thăm nom"
        },
        {
          title: "Đại diện ủy quyền trong lĩnh vực doanh nghiệp",
          description: "Những văn bản pháp lý mà các cặp vợ chồng hoặc các cặp đối tác kết hôn"
        },
        {
          title: "Đại diện ủy quyền trong tranh chấp, tố tụng",
          description: "Giải quyết tranh chấp thay thế cho việc ly hôn thân thiện"
        }
      ]
    },
    relatedAreas: {
      title: "Các lĩnh vực liên quan",
      links: [
        {
          href: "/activity/civil",
          text: "Tư vấn pháp luật"
        },
        {
          href: "/activity/real-estate",
          text: "Dịch vụ pháp lý"
        }
      ]
    }
  },
  services: {
    title: "Dịch vụ Đại diện theo ủy quyền tại văn phòng Luật sư Tùng Lâm",
    items: [
      {
        icon: FileText,
        title: "Đại diện ủy quyền trong các giao dịch nhà đất",
        description: "Phân chia tài sản phức tạp liên quan đến tài sản trước hôn nhân"
      },
      {
        icon: Users,
        title: "Đại diện ủy quyền trong các giao dịch dân sự",
        description: "Các trường hợp tranh chấp quyền nuôi con và quyền thăm nom"
      },
      {
        icon: FileText,
        title: "Đại diện ủy quyền trong lĩnh vực doanh nghiệp",
        description: "Những văn bản pháp lý mà các cặp vợ chồng hoặc các cặp đối tác kết hôn"
      },
      {
        icon: ShieldCheck,
        title: "Đại diện ủy quyền trong tranh chấp, tố tụng",
        description: "Giải quyết tranh chấp thay thế cho việc ly hôn thân thiện"
      }
    ]
  }
};

// Civil Law Page Data
export const civilLawData = {
  backLink: {
    href: "/activity",
    text: "Quay lại trang hoạt động hành nghề",
    icon: ArrowLeft
  },
  hero: {
    icon: Scale,
    title: "Tư vấn pháp luật",
    badge: "12+ năm kinh nghiệm hành nghề",
    description: "Văn phòng Luật sư Tùng Lâm cung cấp dịch vụ Tư vấn Pháp luật chuyên sâu và toàn diện trên mọi lĩnh vực, Văn phòng Luật sư Tùng Lâm lắng nghe, phân tích kỹ lưỡng các vấn đề của khách hàng và đưa ra ý kiến pháp lý rõ ràng, chính xác, giúp khách hàng nắm bắt rủi ro và đưa ra quyết định kinh doanh/cá nhân sáng suốt trong khuôn khổ pháp luật..",
    buttons: [
      {
        href: "https://zalo.me/0938571549",
        text: "Đặt lịch hẹn",
        icon: Phone,
        variant: "primary" as const
      },
      {
        href: "/activity",
        text: "Tham khảo trang dịch vụ hành nghề",
        variant: "secondary" as const
      }
    ]
  },
  mainContent: {
    icon: Scale,
    title: "Dịch vụ tư vấn Pháp luật",
    description: [
      "Trong bối cảnh xã hội ngày càng phát triển, sự phức tạp và đa dạng của các vấn đề pháp lý đòi hỏi một cách tiếp cận chuyên nghiệp và chiến lược. Việc sử dụng dịch vụ tư vấn pháp luật không chỉ là phương thức bảo vệ quyền và lợi ích thiết yếu cho cá nhân và doanh nghiệp, mà còn là công cụ phòng ngừa rủi ro pháp lý tiên quyết, đảm bảo sự an toàn và tính hợp pháp trong mọi hoạt động kinh doanh và đời sống.",
      "Việc giải quyết các vấn đề pháp lý là điều vô cùng quan trọng, ảnh hưởng trực tiếp đến quyền, lợi ích hợp pháp của bản thân cũng như tổ chức/ doanh nghiệp. Do vậy, việc hợp hợp tác với văn phòng luật sư uy tín, cung cấp dịch vụ chất lượng, với chi phí phải chăng nhưng vẫn đảm bảo hiệu quả.",
      "Văn phòng Luật sư Tùng Lâm tự hào là đơn vị hành nghề lâu năm, được khách hàng tin cậy, nổi bật với tư duy pháp lý sắc bén và kinh nghiệm sâu rộng trong việc tư vấn, xử lý các vấn đề pháp lý trên nhiều lĩnh vực.",
      "Để xứng đáng với sự tín nhiệm của khách hàng, Luật sư Tùng Lâm luôn không ngừng trau dồi và cập nhật kiến thức pháp luật mới nhất. Mục tiêu của chúng tôi là cung cấp sự tư vấn và hỗ trợ giải quyết triệt để mọi vướng mắc pháp lý doanh nghiệp một cách nhanh chóng, hiệu quả, giúp Quý khách hàng hoàn toàn yên tâm tập trung nguồn lực vào hoạt động kinh doanh và sản xuất.",
      "Văn phòng Luật sư Tùng Lâm cung cấp dịch vụ tư vấn pháp lý chuyên sâu trên nhiều lĩnh vực đa dạng, nhằm đáp ứng toàn diện nhu cầu của Quý khách hàng. Các lĩnh vực chính mà chúng tôi đảm nhận bao gồm:",
      "I. PHÁP LUẬT DÂN SỰ & TÀI SẢN",
      "Chúng tôi cung cấp sự hỗ trợ chuyên sâu trong các vấn đề liên quan đến quan hệ dân sự và tài sản:",
      "+ Hợp đồng & Bồi thường thiệt hại: Tư vấn, soạn thảo, rà soát Hợp đồng Dân sự; Giải quyết các yêu cầu Bồi thường thiệt hại ngoài hợp đồng.",
      "+ Hợp đồng Dân sự: Tư vấn, soạn thảo, rà soát và đàm phán các loại Hợp đồng Dân sự, đảm bảo tính chặt chẽ và an toàn pháp lý.",
      "+ Di sản & Tài sản: Tư vấn Phân chia di sản thừa kế, Giải quyết các tranh chấp về quyền sở hữu và quyền sử dụng tài sản.",
      "+ Quyền Tài sản: Xác lập, bảo vệ Quyền sở hữu, Quyền sử dụng và các giao dịch liên quan đến tài sản.",
      "+ Tranh chấp Tài sản: Giải quyết các tranh chấp về quyền sở hữu, quyền sử dụng và các giao dịch liên quan đến tài sản.",
      "+ Hộ tịch: Hỗ trợ các thủ tục hành chính liên quan đến khai sinh, kết hôn, thay đổi/cải chính hộ tịch.",
      "II. PHÁP LUẬT DOANH NGHIỆP & THƯƠNG MẠI",
      "Chúng tôi hỗ trợ doanh nghiệp trong việc tuân thủ pháp luật và giải quyết các vấn đề phát sinh:",
      "+ Tư vấn các vấn đề pháp lý liên quan đến hoạt động kinh doanh của Doanh nghiệp, bao gồm các vấn đề về hoạt động đầu tư, lao động, về lương, các loại bảo hiểm liên quan đến người lao động, hợp đồng, thủ tục pháp lý liên quan đến hoạt động kinh doanh, quy định về an toàn lao động, về chất lượng sản phẩm, cơ cấu quản lý và điều hành doanh nghiệp, nguyên tắc giải quyết tranh chấp trong hoạt động kinh doanh, tranh chấp về lao động, tranh chấp trong quản lý và điều hành doanh nghiệp.",
      "+ Giao dịch & Tranh chấp: Soạn thảo, đàm phán Hợp đồng kinh doanh; Giải quyết các Tranh chấp nội bộ công ty.",
      "+ Tuân thủ & Rủi ro pháp lý: Đánh giá và tư vấn về Tuân thủ pháp luật doanh nghiệp; Phòng ngừa và quản lý rủi ro pháp lý trong hoạt động kinh doanh.",
      "+ Sở hữu trí tuệ: Bảo vệ quyền sở hữu trí tuệ, bao gồm đăng ký nhãn hiệu, bản quyền và giải quyết tranh chấp liên quan.",
      "+ Hợp đồng Dân sự, Thương mại: Soạn thảo, rà soát hợp đồng, đàm phán và giải quyết các tranh chấp hợp đồng.",
      "+ Hợp đồng Kinh doanh: Soạn thảo, rà soát và đàm phán các loại Hợp đồng phục vụ hoạt động kinh doanh (mua bán, dịch vụ, hợp tác...).",
      "III. PHÁP LUẬT ĐẤT ĐAI & BẤT ĐỘNG SẢN",
      "Chúng tôi cung cấp dịch vụ tư vấn toàn diện về các vấn đề liên quan đến đất đai và bất động sản:",
      "+ Giao dịch Bất động sản: Tư vấn pháp lý cho các hoạt động Mua bán, Chuyển nhượng, Thuê mướn bất động sản.",
      "+ Tranh chấp Đất đai: Đại diện giải quyết các Tranh chấp về quyền sử dụng đất, Tranh chấp ranh giới.",
      "+ Thủ tục Hành chính Đất đai: Hỗ trợ Thủ tục sang tên, Hợp thức hóa quyền sử dụng đất (xin cấp, chuyển đổi Sổ đỏ/Sổ hồng).",
      "+ Đầu tư Bất động sản: Tư vấn pháp lý về các dự án Đầu tư bất động sản, Thẩm định pháp lý bất động sản.",
      "+ Quy hoạch & Pháp lý: Tư vấn về Quy hoạch sử dụng đất, Pháp lý dự án bất động sản.",
      "IV. PHÁP LUẬT HÔN NHÂN & GIA ĐÌNH",
      "Chúng tôi cung cấp dịch vụ tư vấn giải quyết các vấn đề pháp lý phức tạp và nhạy cảm trong lĩnh vực hôn nhân và gia đình:",
      "+ Ly hôn & Phân chia tài sản: Tư vấn và đại diện giải quyết các vụ việc ly hôn, phân chia tài sản chung, thỏa thuận nuôi con.",
      "+ Quyền nuôi con & Cấp dưỡng: Tư vấn và giải quyết tranh chấp về quyền nuôi con, cấp dưỡng, thăm nom.",
      "+ Thỏa thuận tiền hôn nhân: Soạn thảo và tư vấn các thỏa thuận tiền hôn nhân, tài sản trước hôn nhân.",
      "+ Nhận con nuôi & Bảo vệ trẻ em: Tư vấn về thủ tục nhận con nuôi, bảo vệ quyền lợi của trẻ em trong các vụ việc gia đình.",
      "V. PHÁP LUẬT LAO ĐỘNG",
      "Chúng tôi hỗ trợ doanh nghiệp và người lao động trong việc tuân thủ Luật lao động và giải quyết các tranh chấp phát sinh:",
      "+ Hợp đồng & Kỷ luật: Tư vấn, soạn thảo và rà soát Hợp đồng lao động, quy chế lao động nội bộ; Hỗ trợ xử lý các vấn đề liên quan đến Kỷ luật lao động, chấm dứt hợp đồng lao động theo đúng quy định.",
      "+ Chế độ Phúc lợi: Tư vấn pháp lý chuyên sâu về Chế độ Lương, phụ cấp, các loại Bảo hiểm bắt buộc (Bảo hiểm xã hội, y tế, thất nghiệp) và các quyền lợi khác của người lao động.",
      "+ Đại diện và hỗ trợ giải quyết các Tranh chấp lao động cá nhân và Tranh chấp lao động tập thể thông qua hòa giải, trọng tài hoặc tại Tòa án.",
      "+ Tuân thủ Pháp luật Lao động: Đánh giá và tư vấn về Tuân thủ pháp luật lao động; Phòng ngừa và quản lý rủi ro pháp lý trong quan hệ lao động.",
      "+ Tư vấn về các chính sách, quy định liên quan đến an toàn lao động, bảo vệ quyền lợi người lao động và trách nhiệm của người sử dụng lao động.",
      "VI.PHÁP LUẬT TỐ TỤNG & HÀNH CHÍNH",
      "Văn phòng Luật sư Tùng Lâm cung cấp dịch vụ đại diện và bảo vệ pháp lý mạnh mẽ trong các quy trình tố tụng phức tạp, đảm bảo quyền lợi của Quý khách hàng được bảo vệ tối đa trước cơ quan nhà nước có thẩm quyền:",
      "+ Đại diện Tố tụng: Đại diện Quý khách hàng trong các vụ án Dân sự, Hình sự, Hành chính tại Tòa án các cấp và các cơ quan nhà nước có thẩm quyền.",
      "+ Bảo vệ Quyền lợi Bị can/Bị cáo: Cung cấp dịch vụ Bào chữa chuyên nghiệp ngay từ giai đoạn Điều tra, Truy tố cho đến Xét xử.",
      "+ Bảo vệ Quyền lợi Đương sự: Đại diện và bảo vệ quyền lợi hợp pháp của Nguyên đơn, Bị đơn, Người có quyền lợi, nghĩa vụ liên quan trong các vụ án tranh chấp Dân sự, Kinh doanh-Thương mại, Lao động, Hành chính.",
      "+ Tư vấn Thủ tục Tố tụng: Hướng dẫn chi tiết về trình tự, thủ tục tố tụng; Giải đáp thắc mắc liên quan đến pháp lý trong các giai đoạn và thủ tục tố tụng.",
      "+ Soạn thảo Hồ sơ Tố tụng: Chuẩn bị và soạn thảo các tài liệu, hồ sơ cần thiết phục vụ cho quá trình tố tụng, đảm bảo tính chính xác và đầy đủ theo quy định của pháp luật.",
      "+ Giải quyết Tranh chấp Ngoài Tố tụng: Hỗ trợ thương lượng, hòa giải để giải quyết tranh chấp một cách hiệu quả và tiết kiệm chi phí.",
      "Luật sư hướng dẫn, đưa ra ý kiến, giúp khách hàng soạn thảo các giấy tờ liên quan đến việc thực hiện quyền, nghĩa vụ của họ theo quy định của pháp luật.Khi thực hiện tư vấn pháp luật, luật sư phải giúp khách hàng thực hiện đúng pháp luật để bảo vệ quyền, lợi ích hợp pháp của họ."
    ]
  },
  professionalAreas: {
    title: "Lĩnh vực hành nghề",
    icon: BriefcaseBusiness,
    areas: [
      { icon: Heart, title: "Hôn nhân và gia đình." },
      { icon: ScrollTextIcon, title: "Thừa kế và quyền sở hữu tài sản" },
      { icon: ShieldUser, title: "Luật Lao động" },
      { icon: HouseIcon, title: "Luật Đất đai" },
      { icon: Handshake, title: "Soạn thảo và giao dịch dân sự" },
      { icon: FilePen, title: "Hợp đồng dân sự, thương mại." },
      { icon: Scale, title: "Luật Hình sự." },
      { icon: Building2, title: "Pháp lý Doanh nghiệp." },
      { icon: Landmark, title: "Khiếu nại/ Tố tụng hành chính" },
      { icon: FileBadge, title: "Khai sinh hộ tịch" }
    ]
  },
  sidebar: {
    contact: {
      icon: Phone,
      title: "Bạn cần hỗ trợ tư vấn Pháp luật?",
      description: "Hãy liên hệ với chúng tôi ngay hôm nay để đặt lịch hẹn tư vấn về vấn đề pháp lý của bạn.",
      buttons: [
        {
          href: "https://zalo.me/0938571549",
          text: "0938571549",
          icon: Phone,
          variant: "primary" as const
        },
        {
          href: "mailto:vanphongluatsutunglam@gmail.com",
          text: "Email chúng tôi",
          icon: Mail,
          variant: "secondary" as const
        }
      ]
    },
    specialties: {
      title: "Lĩnh vực chuyên môn",
      icon: FileText,
      items: [
        {
          title: "Tư vấn pháp lý chuyên sâu và toàn diện trên mọi lĩnh vực",
          description: "Dù vấn đề pháp lý của Quý khách hàng phức tạp đến đâu, Văn phòng Luật sư Tùng Lâm sẵn sàng phân tích chuyên sâu và cung cấp lộ trình pháp lý rõ ràng."
        },
        {
          title: "Tư vấn pháp chế dài hạn cho doanh nghiệp",
          description: "Dịch vụ Tư vấn Pháp chế Dài hạn của chúng tôi cung cấp sự hỗ trợ liên tục, chuyên sâu, giúp doanh nghiệp bạn an tâm tập trung kinh doanh, loại bỏ các rủi ro pháp lý tiềm ẩn."
        },
        {
          title: "Soạn thảo Hồ sơ/ hợp đồng pháp lý trên mọi lĩnh vực",
          description: "Chúng tôi cung cấp dịch vụ soạn thảo hồ sơ và hợp đồng pháp lý chuyên sâu trên mọi lĩnh vực. Đảm bảo văn bản của bạn rõ ràng, tuân thủ và bảo vệ quyền lợi của quý khách hàng."
        },
        {
          title: "Tư vấn về các chính sách, quy định liên quan Luật lao động",
          description: "Tư vấn về các chính sách, quy định liên quan đến an toàn lao động, bảo vệ quyền lợi người lao động và trách nhiệm của người sử dụng lao động."
        }
      ]
    },
    relatedAreas: {
      title: "Các lĩnh vực liên quan",
      links: [
        {
          href: "/activity/corporate",
          text: "Tham gia tố tụng theo quy định của pháp luật"
        },
        {
          href: "/activity/family",
          text: "Đại diện ngoài tố tụng"
        }
      ]
    }
  },
  services: {
    title: "Dịch vụ tư vấn pháp luật tại văn phòng chúng tôi",
    items: [
      {
        icon: HeartHandshakeIcon,
        title: "Tư vấn pháp lý chuyên sâu và toàn diện trên mọi lĩnh vực",
        description: "Dù vấn đề pháp lý của Quý khách hàng phức tạp đến đâu, Văn phòng Luật sư Tùng Lâm sẵn sàng phân tích chuyên sâu và cung cấp lộ trình pháp lý rõ ràng."
      },
      {
        icon: BriefcaseBusiness,
        title: "Tư vấn pháp chế dài hạn cho doanh nghiệp",
        description: "Dịch vụ Tư vấn Pháp chế Dài hạn của chúng tôi cung cấp sự hỗ trợ liên tục, chuyên sâu, giúp doanh nghiệp bạn an tâm tập trung kinh doanh, loại bỏ các rủi ro pháp lý tiềm ẩn."
      },
      {
        icon: FilePenIcon,
        title: "Soạn thảo Hồ sơ/ hợp đồng pháp lý trên mọi lĩnh vực",
        description: "Chúng tôi cung cấp dịch vụ soạn thảo hồ sơ và hợp đồng pháp lý chuyên sâu trên mọi lĩnh vực. Đảm bảo văn bản của bạn rõ ràng, tuân thủ và bảo vệ quyền lợi của quý khách hàng."
      },
      {
        icon: ShieldUser,
        title: "Tư vấn về các chính sách, quy định liên quan Luật lao động",
        description: "Tư vấn về các chính sách, quy định liên quan đến an toàn lao động, bảo vệ quyền lợi người lao động và trách nhiệm của người sử dụng lao động."
      }
    ]
  }
};

// Real Estate Law Page Data
export const realEstateLawData = {
  backLink: {
    href: "/activity",
    text: "Quay lại trang hoạt động hành nghề",
    icon: ArrowLeft
  },
  hero: {
    icon: Home,
    title: "Dịch vụ pháp lý",
    badge: "12+ năm kinh nghiệm hành nghề",
    description: "Văn phòng Luật sư Tùng Lâm cung cấp Dịch vụ pháp lý toàn diện được thiết kế để bảo vệ và tối đa hóa lợi ích của khách hàng. Các dịch vụ pháp lý chuyên sâu của chúng tôi bao gồm: Tư vấn Chiến lược, Đại diện ngoài Tố tụng trong đàm phán, giao dịch, và Tham gia Tố tụng chuyên nghiệp tại các cấp Tòa án. Văn phòng cam kết hành nghề chính trực và hiệu quả tối ưu trong mọi lĩnh vực.",
    buttons: [
      {
        href: "https://zalo.me/0938571549",
        text: "Đặt lịch hẹn",
        icon: Phone,
        variant: "primary" as const
      },
      {
        href: "/activity",
        text: "Tham khảo trang dịch vụ hành nghề",
        variant: "secondary" as const
      }
    ]
  },
  mainContent: {
    icon: Home,
    title: "Dịch vụ pháp lý",
    description: [
      "Luật Đất đai và Bất động sản là lĩnh vực pháp luật điều chỉnh các quan hệ pháp luật về quyền sở hữu, quyền sử dụng đất đai và các giao dịch liên quan đến bất động sản. Đây là một trong những lĩnh vực phức tạp và quan trọng, đòi hỏi sự am hiểu sâu sắc về quy định pháp luật và thực tiễn thị trường.",
      "Văn phòng Luật sư Tùng Lâm chuyên cung cấp các dịch vụ pháp lý toàn diện trong lĩnh vực đất đai và bất động sản. Chúng tôi hỗ trợ khách hàng trong các giao dịch mua bán, chuyển nhượng, cho thuê, thế chấp bất động sản, cũng như giải quyết các tranh chấp phát sinh.",
      "Với đội ngũ luật sư có chuyên môn cao và kinh nghiệm thực tế phong phú, chúng tôi cam kết mang đến cho khách hàng những dịch vụ pháp lý chất lượng cao, đảm bảo tính pháp lý và an toàn cho mọi giao dịch bất động sản.",
      "Các dịch vụ của chúng tôi bao gồm tư vấn về quyền sử dụng đất, thủ tục cấp giấy chứng nhận, tư vấn giao dịch bất động sản, soạn thảo hợp đồng, thẩm định pháp lý bất động sản, giải quyết tranh chấp đất đai và đại diện tố tụng tại tòa án."
    ]
  },
  professionalAreas: {
    title: "Lĩnh vực hành nghề",
    icon: Building2,
    areas: [
      { icon: Home, title: "Mua bán bất động sản" },
      { icon: FileCheck, title: "Thủ tục cấp sổ đỏ" },
      { icon: MapPin, title: "Tranh chấp đất đai" },
      { icon: FilePen, title: "Soạn thảo hợp đồng BĐS" },
      { icon: Building2, title: "Chuyển nhượng quyền sử dụng đất" },
      { icon: ShieldCheck, title: "Thế chấp bất động sản" },
      { icon: SearchCheck, title: "Thẩm định pháp lý BĐS" },
      { icon: FileText, title: "Cho thuê bất động sản" },
      { icon: Scale, title: "Tư vấn quy hoạch & pháp lý" },
      { icon: Lightbulb, title: "Tư vấn đầu tư BĐS" }
    ]
  },
  sidebar: {
    contact: {
      icon: Phone,
      title: "Bạn cần trợ giúp về Luật Đất đai?",
      description: "Hãy liên hệ với chúng tôi ngay hôm nay để đặt lịch hẹn tư vấn về vấn đề bất động sản của bạn.",
      buttons: [
        {
          href: "https://zalo.me/0938571549",
          text: "0938571549",
          icon: Phone,
          variant: "primary" as const
        },
        {
          href: "mailto:vanphongluatsutunglam@gmail.com",
          text: "Email chúng tôi",
          icon: Mail,
          variant: "secondary" as const
        }
      ]
    },
    specialties: {
      title: "Lĩnh vực chuyên môn",
      icon: FileText,
      items: [
        {
          title: "Giao dịch bất động sản",
          description: "Tư vấn và hỗ trợ các giao dịch mua bán, chuyển nhượng bất động sản an toàn."
        },
        {
          title: "Tranh chấp đất đai",
          description: "Giải quyết các tranh chấp về quyền sử dụng đất, ranh giới đất đai."
        },
        {
          title: "Thủ tục pháp lý",
          description: "Hỗ trợ hoàn tất các thủ tục cấp giấy chứng nhận quyền sử dụng đất."
        },
        {
          title: "Thẩm định pháp lý",
          description: "Thẩm định pháp lý dự án, giao dịch bất động sản để đảm bảo an toàn."
        }
      ]
    },
    relatedAreas: {
      title: "Các lĩnh vực liên quan",
      links: [
        {
          href: "/activity/civil",
          text: "Luật Dân sự"
        },
        {
          href: "/activity/corporate",
          text: "Tham gia tố tụng"
        }
      ]
    }
  },
  services: {
    title: "Dịch vụ luật Đất đai & Bất động sản tại văn phòng chúng tôi",
    items: [
      {
        icon: Home,
        title: "Tư vấn giao dịch BĐS",
        description: "Tư vấn toàn diện cho các giao dịch mua bán, cho thuê, chuyển nhượng bất động sản."
      },
      {
        icon: FilePen,
        title: "Soạn thảo hợp đồng BĐS",
        description: "Soạn thảo và thẩm định các loại hợp đồng liên quan đến bất động sản."
      },
      {
        icon: FileCheck,
        title: "Hỗ trợ thủ tục pháp lý",
        description: "Hỗ trợ các thủ tục cấp sổ, sang tên, chuyển nhượng quyền sử dụng đất."
      },
      {
        icon: Scale,
        title: "Giải quyết tranh chấp",
        description: "Đại diện khách hàng giải quyết tranh chấp đất đai tại tòa án và cơ quan nhà nước."
      }
    ]
  }
};


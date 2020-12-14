using System.Web;
using System.Web.Optimization;

namespace _02_View_And_Binding_with_Bootstrap
{
    public class BundleConfig
    {
        // 번들 작성에 대한 자세한 내용은 http://go.microsoft.com/fwlink/?LinkId=301862 링크를 참조하십시오.
        public static void RegisterBundles(BundleCollection bundles)
        {
            //StyleBundle에 ~/examhome/css의 Key 값으로 CSS 번들 추가
            bundles.Add(new StyleBundle("~/examhome/css").Include(  //~은 루트 디렉터리(홈 디렉터리)를 지칭한다.
            "~/Template/assets/vendor/bootstrap/css/bootstrap.min.css",
            "~/Template/assets/vendor/fontawesome/css/font-awesome.min.css",
            "~/Template/assets/vendor/flaticons/flaticon.css",
            "~/Template/assets/vendor/hover/css/hover-min.css",
            "~/Template/assets/vendor/wow/animate.css",
            "~/Template/assets/vendor/mfp/css/magnific-popup.css",
            "~/Template/assets/custom/css/style.css"
            ));

            //ScriptBundle에 ~/examhome/js의 Key 값으로 JS 번들 추가
            bundles.Add(new ScriptBundle("~/examhome/js").Include(
            "~/Template/assets/vendor/jquery/js/jquery-2.2.0.min.js",
            "~/Template/assets/vendor/bootstrap/js/bootstrap.min.js",
            "~/Template/assets/vendor/imagesloaded/js/imagesloaded.pkgd.min.js",
            "~/Template/assets/vendor/isotope/js/isotope.pkgd.min.js",
            "~/Template/assets/vendor/mfp/js/jquery.magnific-popup.min.js",
            "~/Template/assets/vendor/circle-progress/circle-progress.js",
            "~/Template/assets/vendor/waypoints/waypoints.min.js",
            "~/Template/assets/vendor/anicounter/jquery.counterup.min.js",
            "~/Template/assets/vendor/wow/wow.min.js",
            "~/Template/assets/vendor/pjax/jquery.pjax.js",
            "~/Template/assets/custom/js/custom.js"
            ));


        }
    }
}

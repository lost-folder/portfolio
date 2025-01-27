import React from 'react'
import Card from '../components/Card'

const page = () => {
    const user = [
        {
          "title": "Web Development",
          "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAAArlBMVEX///8lN1ci49gA4dUhNFUAHUcbMFIAIkoAGUUAH0gAI0oAFkQAE0IYLlEAF0QVLFANKE2fpK/T1drt7vDo+/qO7udm6eBU597JzNKusrvz9PUAEEHf4eQoOlmw8u6TmaV56+Nqc4Wl8evB9fFYYnh6gZGPlaK6vsU0Q2DN0NWFjJpW5953f49jbICmq7Wcoazx/fzb+fdDUGre+vhPW3K69PCG7eY/TGcAAj0xQV53qBdcAAANKUlEQVR4nOWdfUObSBDGRQkhiQlErzUvWk2rRq3RO8/W6/f/YgdLDTuwC8+wC5vY52/UZRx+7M4bBwe7qm9XZ7IOzw6JPv/jeoHd6dPRYbWOvrleYlf6q84UiVyvsSvVukXiGH+5XmRHAtzi6G/p+sXD28vU2Wpb1Q/AFvIzsogiP+i/Oltvmzqrt8TRF+n6m8hL1L90tuD2hJDzSP6Bnie0PHG14vYEkPPwSrp+Pcxs4QeuVtyeELeQ91qvQWYLb7xytuaW9I1JzvPQe1dv7WzV7eg74BZfpetvo60tvPDU2bLbEEROeXMR56bwgjdn625DCDk/S9e/kzNTfOts4S2o3hL0YHYdyLbwju+drdy6uOQ8PSam8PzI2dKtCyHnJ+n655jawhtvnK3dsv7mkjPwC7bwBnNnq7crhJzfpetn/aIpPG/0QV6siFvI5FwFZVv4d86Wb1MIOeVj2eK4bIrkxfrg7AYs6jNgCpmcT0VyZprMnN2BNUHklIN7v0rkzJ6SeOHsHmzpK2CLM+n6k4HSFMmL9drZPdhSvSUOj35I1z+ONbbw+k/ObsKOuOQ8CHWmSPbi567uwo4Ach7+lK6fq8mZIeOXs9uwIYicckDrTU3OTPGNsxuxIIScmoCWSuE+v1gBS5BUwIOWnJkG+/tiZZNT90J9V7C/2SOEnFfS9TSgpdLw2dW9GIpNzlfFsaygfX2xssk5qTWF53vObsdIgCW0qQCtokdn9wOrTPh/TFIBeoU7nT06md/cjUa/iuFqhJxyKkAV0FIaY0eDXKkZjvvxONku+v/RpDhEzopUgFbBS7f3CCgxw9toIMygXCNCTnlzUUwF6DXcpbKM8/nDy0Q2Q6YluQh4QqpTAXod70ZZxm8zRKozVCxfCJFTDmitavbfktyXZaRmCMvesNWYxGevAL+QUwG1ZxHypxyWZZyvH16rzCAUyltCNjkPTpa4Lbyek+xRaoZJr8YMqXxSHMAlZ6JbHBjdv1jP17evYS+OsHddTP5VwBNy+Knw917Al2qqDssyUjP0ekPQDNl/Sv55iJz/Fv7oAtxsZabvInuUmOF6wDNDqjE5JyDkPCv96Rm8xfBaL8s4XV9e9xMz1LJBoR555yNu8aW8AA4y/Lj889bMsOnzvSFfGQlSNyBnJiCCsVUbZRmns8tNHDY3g1BMMjnAE0ICWlstaiNbkgZWs0ens2dzMwgdy2d2iJzqPqJ7DjJGloJcv80Qm5shVUA2ggg5dZ0ztwzPsFCWkZhhNQ77lswgNCCZC8QtvupWx0GG0Yt1MZuuAisPBRE9LH3hBrToEjnIGDXLHqVm8FMzNHlj1igmoXrkCfmsWyYTGUNu9mhxP1156UPRghmESG0ZRM6qpkMOMgJOWcbJ0+NF2AfOVgaiCzIhZyYOMvp4V9pm1K4ZhIYkNG1ETqFFzFgynD164ICoschu2IycmTjI8C9AWwCZKHNFpJIfeUIqyJnpkvE/BLNHVWUu9kQCWsbkzMRBBpY9emkdFV6xEOAn4hf1K2chAynLqClzsSQ+OYsBLZU4yEDKMjih5ebqyX8SIifUuM5BBlCWwYmZNVZEzgRAg7IioKUUBxnLuhdrfZmLDRFy/ou4xQ/tiok4yPD9OsN2QU6aCkDIqQxoqcRBRlSdPTodtWeBXDQVgFTi/NQtuCQOMqpfrJdImYuxRvKfREY7lFIBFWLtMqqyR+2fQxIFZNNnkZxCLGRUlGWgZS5mIqkAiJyKVIBeJwxkVDT1bizHrpSiByOr5MzEQYa2LEPdt2VbMYkeIOS84tni4JVRljHW/I5pJ8eypXwSgMjJHSnGQYYue3TRBTn77D0nf4gWBxnqsoz7ujJzU/njuL8kpoBGO1QHtJR6ZiBD2dSr79syVxANe+HbzdM9PSp/AryiLqCl1DUDGYqyjEU7e87UGcJoc7lWHYUQctYGtFTiIEORPdJ0vBoocYbBKHUG3fYOImez+YOcUq5y9ujOIjmFM8QaZ8jVDjkzMZBRauq1FdAKongweXvUO0OutsiZiYGMYvboxvhY5gfxMIyvb2ucIRcy2qEROYUWjFqhQllGz8QMwhnuIGeQhJDze/2v0YmzyyDZo3nDgBbbGXJBbXYmk1s5yJDrpTjH/t9KnWGUOMOsYQ0pQk7msawgBjKivKmXR87kNTEMh42cIRdETiQVUCEGMvJpGVDfljBD4gzHd4/Tps6QCyKn4Qxbzi5jW5aB7LP8xBn6hs4gCSEnJ6Cl1DMenXrPHiGpAP+iMRlUgsgJpgIqhHZhJRpO4Z+I7fb/AuPEDMmZiYEM8WKFUgF9q11KCDkZqQC9GLsMEX2E+rbsDqyCyGllRj4DGanrYwVqsc32X8ArbE2Fx3cZ/isc0LLY/guRk5UKqBCc9fFfDh5R1tqbcdcVOYXgXcb49uACvNTeKB6kzY6dCtBrCh5MwvODO9QW1iYGdEfOTBgy0pQivAFPLGensRHwCrvf0/ARZIj8P2M/YqX/AiJn44CWSmtk1yBaARkVHFaQgYx2aB7QUukGeEjG2bH9AY+BW0AGRM5GqQC1ztfPCAXe8/9v+BHGvBcaarOz8imixUk6V6A3REyx9fhTRizHGBmAV5hvLhJnWAUTRrdD3go4x2O/psiAyGkQ0BLOEPa4LUCjPEnCmCVRUwBXJ4iczQJaqTN4iTM0aB0mrYAMKxohAyInOxWQOkPaTt+4EYq0AnLSCSbIsE7O81ljZ8hVqHxl1DmZIAPwCpScxs6Qqxi1YwyTaI4M6LMJ9eR8dwZbVZjHhSP4KSOP2BgZEDmraluFM4RWnCFXUCrbWjN2GQ2nH0Lk1KUC0u7pi9QZrNdeDsthqhV+YoX716ggcpYDWsIZBuw9AyzVYAwP/1PNkAF4RYGcwhnSaW0tFuJGqvrfc+NqwGohbXY0oLVZtuYMuSbKB54RQW+yy4DIKQe0rruov9U1nzGKD/jIgMhJ5rZ20tCiIKfQglHxykYGRE45oNVNK+BAt94Z48XKRQbiFSSg1UkTx1g/HoRTxcbbZUDk1H/CrS2FFTeh+baJSjxkIKMdyLGsQeUUX6oi6K04L1YWMrjkdNEKWNQT4zFlfEiMTc5uWgFD7YKFGAVwDGQgXtFg4rWhgprA/oIz5A5FBpucDloBVZoxnlQUGWxyOmgFVIqRPUJ3GYhbkInX3ZATGCTEaaGAkAGRk0y87oScx8BQEM5/BfqSA+AVNBXAiB80VzmgpdLc7sEEIqcc0Gq9FVCoj02k2zBerPVzMSFyyrWtjORVc2l7dYviJBxqkcEl56KT2VY9dAQba3xXDTKQoTikttV+K2BpyeN4iX/+jDNXuGaULmAJmgqw2QpYUtobOLm7mXNO2YyyjGpksMl5YtTzVWWGIDMDu6L7lPPQViEDIqecCkCKithmSLxh9Ovx6aTZ59/WjH9PFTK45Kz6+KUDM2TivNn0yIDIeSX9gMWpgIINF4/FVvom4uQmtMgALEFTAXamAgo2eCsbZhDilGXoZpkhQ3E4H7+EzBANJ/5qassMmTjjZzSzzKChOCQVYHIsS80QBqvprIUvZHK+8aFGBkROOaDVOPyddg6nZmjrsyucsgwlMiByGqcCEjaE481za2b4vTTO06vYZUANyk0+4bY1Q/JQxK2bIdMj4/EtI4NNTs4OLzXDcHPZiRkyccIqUREZbHKCqYB0Bk+/UzMIcbJHJWSwyVm/pfFTM1xfrp188hHtUhJakiUiQ3FIbWt1KiA1w8CVGTKxPmtBaiXZ5NSmAgJhBmsN9Y3F+XgWGecLkZMcy1TPYxDFvd6rezNkYpRlkDIXiJxyKqDYvpFOmdgdM2TCyzLIxGvILUhXQD4mLDli9sLXh50yQya0LGMsBxEhctLa1vnSF2YYjF520QxC6IuVJGshchbGXMzjcIfNkAkryyDzEKDRDuWugB39VLQsqCyDfMINGcRoZcxF54KmH07ksAHkFhabtTsUUJZBPn4JkdNqs3aHqi/LGMjf5YTIaWvMReeqS2eRMpeG5NwX1ZVlkDIXZLSDxTEXnaumLIOMTvnA5MxUWZZBylygNrt9JWemqrKMoVzmAg3FsTrmonNVZI9ImQtGTqtjLrqXviwjupQug8hpccyFG2mznXxyWhlz4VK6aRm+3Lf1B5BTSFOWQQJaEDkN57buhNRNvX3pCoychnNbd0OqgVWkbwsip8HE6x2SasYd6duC3MJ8butOqFyWQb4KBZFzf49lBZXKMkjfFkJOYMzFnmhRfJfIfVtQgzLnE247rkJZBkkFQOQ0nni9Q6JlGSQVgDwh+xvQUkn+8BVJBfxZ5BSSs0ckFYCMdtjngJZK0zx7JI1wA8m5zwEtlbZlGWO5ywpps/sIxzKqbVkGSQUgltjzgJZKs6zmjvQIYOTc84CWSjciyEW+8A2Rc+8DWiq9DIOgLx9F/kxyZnq63pAqRqjk+cORUy3EFh+QnEpBH2X6gORU6metMT5EnBPTl5pag7OdjWf9DwI4IFDL1b3MAAAAAElFTkSuQmCC",
          "description": "Build modern, responsive websites that are fast, scalable, and user-friendly."
        },
        {
          "title": "Translate",
          "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEXMyPv09PQAAABUVFT5+fn6+vr9/f1PT0/OyP2kpKRLS0tISEjTz/87OkTRzP+CfZnJw/O4uLhtbW0+Pj4QEA5aWlqXl5eCgoIeHh4zMzPNCw7j4+PLy8vc3NzJAADV1dXu3d86OjrMFxjqxcbZkY8aGhrt7e15eXmoo8nOTEvSZGKJh6XjrKyTj64sLCzkv7u5teDNHiJ2dIi4tdu9vb1LSVOioqHktLHUcW/VcG6KioiXlKqgm70wLzbYl5PszMzMPTv2teULAAADvElEQVR4nO3diVLaUBSAYdEsLNbK4gIIihXEWrG0lrbUVt//qZqEkCLJhSZzJ5wk/ze1M4w141/wniRmwt4eAAAAAAAAAAAAAAAAAAAAAAAAgKIpH2my6xCV8vi9Hl8+7zpF4eh+XxMKdyXnhYeO+9Z5UkM3bPlg/6uzsV0HrTt2v8OKZSRkPp232/sj/5F14mzsm6zG8nHLLTRLCRmLQv8RhbuwXrh89a00qKkKndFf3nVYYK3w6pPvcdk4qquFCo36bDarPDw83MtZVN8WGt/7vh/L5t6guq7mfzRDhc4Tblpdd+0ai9mBCxV2PCuFtQOVWrjQ+woK07VSaJimFbxKf1qm6UX22jWVdsYKjel0en2z/DYf+9Np/6q0VaYKO/1O/8ZfQo0Pzss1d4XXnYIWKof95sJDKVN/a+Ho6SJKT13YPZvP57+en5/HIhK3FvYGUctos2IoC0vOKmw1nK3+FrGDur0wch7amwodXuE7ClOxVvjH8r0EhZNBhHZWCzvTO99rsJaOoqlXGtmFneVem7t/mnAeCi9clcvCfvg53HKMXx9OJsGZqIDcwtePvrtg4l+quf8BF43b28ZF6FMnQgudtdT0rKyl6qOngfcUu/+61hq+dd6SWvi/8zA4Al781NntdUMKU7O9cNJUmQSFzfXfX7gbzUrhqKcWDIfQZ7piV5rYR8AKYqcFhbksHHVjy1jhhrVUoWFmrFA9D6PZtxSma6XQPaK4MYNCx5b90mhyX6WlR8fL8kRo133kHvaNIk8mbnIpdaUpvf3db/Bg85UKipPFMgt1ojBFK4XeT13ojEts3iZEFhpxJ7vCoGFJLYw59zI4D/NfaIcuK0mkJrawtOHSoFieDKmFsUf7hpEvs1AnClNUpFepUY15mKQi9uipAPMw/4V21dZB8MSvaFJn4qerUPMw/4WWLlILjRNNxK6lBZiH+S/UMu9tuyq2sHSqSUXsxDc1YeKnrFCFuga+KbXQaGgyl7qWGgfOUn/g/Vn8lfRD7LRg4md/4htnmpyKnfi5X0sLMA/zX5h8LzQrhcnWlXpkosjCZNOiehr5ApdZmGy+Z6rQznthsv3sSnZ+DhNO/Og5I7NQJwpTRCGFFO4ehcUuNBXXCEs9T5OgMGPn2iiMKIy8qljwFUOxGVm7RjhBIlcM7brOlf/CxV12Z4nvsqsg6E5Ye2XvTsn7uo2drQq5YZtL392u/xWKueeeh8LsF2p75wDBbyGg690fAnIWGQAAAAAAAAAAAAAAAAAAAAAAEPYX4SI+b7DH+xIAAAAASUVORK5CYII=",
          "description": "Your gate way to comnicate with others"
        },
        {
          "title": "Scripter",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHzKsfyO__RDItOA0WbVShaHtzeT0Lc3Lwag&s",
          "description": "Scripting to the endless void."
        }
      ]
      
  return (
    <section className="py-16 bg-[#F8EDE3] grid grid-col-8 ">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-12 py-20"> Services</h2>
      
 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {
                user.map((u,i)=>(
                  <Card key={i}
                  title={u.title}
                  description={u.description}
                  image={u.image}
                  />
                ) )
            }
      </div>
    </div>
  </section>
  )
}

export default page
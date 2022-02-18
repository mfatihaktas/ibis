window.BENCHMARK_DATA = {
  "lastUpdate": 1645195931661,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "c2a9757106b0479cb4e794f891aec47d3457b4a6",
          "message": "refactor(benchmarks): move to pytest-benchmark",
          "timestamp": "2022-01-30T21:10:00-05:00",
          "tree_id": "bd3ab97ee668945d803c502be0f7151d150c86de",
          "url": "https://github.com/ibis-project/ibis/commit/c2a9757106b0479cb4e794f891aec47d3457b4a6"
        },
        "date": 1643597611354,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 106.07711094195638,
            "unit": "iter/sec",
            "range": "stddev: 0.003742554087992319",
            "extra": "mean: 9.427104406597039 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 324174.65400583466,
            "unit": "iter/sec",
            "range": "stddev: 3.020698346483816e-7",
            "extra": "mean: 3.0847568976876323 usec\nrounds: 74627"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1537709207060733,
            "unit": "iter/sec",
            "range": "stddev: 0.004426371738493979",
            "extra": "mean: 464.30193219999865 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 385643.7221523987,
            "unit": "iter/sec",
            "range": "stddev: 2.8709558895238066e-7",
            "extra": "mean: 2.5930669749236057 usec\nrounds: 70922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.7342010630355,
            "unit": "iter/sec",
            "range": "stddev: 0.0009844910827777342",
            "extra": "mean: 23.400460875001272 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 39.229055327574606,
            "unit": "iter/sec",
            "range": "stddev: 0.018076123196186098",
            "extra": "mean: 25.491309735849974 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.50615844747404,
            "unit": "iter/sec",
            "range": "stddev: 0.0015502283297067888",
            "extra": "mean: 37.72708150000881 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6225.200868303419,
            "unit": "iter/sec",
            "range": "stddev: 0.00003691290784091648",
            "extra": "mean: 160.63738683383792 usec\nrounds: 2947"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 297.1371042347968,
            "unit": "iter/sec",
            "range": "stddev: 0.0001071151960002964",
            "extra": "mean: 3.365449773010519 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3255308511867336,
            "unit": "iter/sec",
            "range": "stddev: 0.00148392524743293",
            "extra": "mean: 754.4147305999786 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.1086463162457,
            "unit": "iter/sec",
            "range": "stddev: 0.0000435628462734635",
            "extra": "mean: 6.206991510791206 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 280.5321457078568,
            "unit": "iter/sec",
            "range": "stddev: 0.00011528213285671415",
            "extra": "mean: 3.5646538740747005 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 195.77123646004875,
            "unit": "iter/sec",
            "range": "stddev: 0.00008589187666057129",
            "extra": "mean: 5.108002677421262 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10294.314298767986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025608916418687424",
            "extra": "mean: 97.14100142830097 usec\nrounds: 4900"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14806349151539935,
            "unit": "iter/sec",
            "range": "stddev: 0.019356925952391305",
            "extra": "mean: 6.75385937320001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 35.837463116075654,
            "unit": "iter/sec",
            "range": "stddev: 0.024731895340908316",
            "extra": "mean: 27.9037608426984 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 78.77895934506437,
            "unit": "iter/sec",
            "range": "stddev: 0.0004851266670110384",
            "extra": "mean: 12.693744729729687 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.9746138769497,
            "unit": "iter/sec",
            "range": "stddev: 0.00403896192118961",
            "extra": "mean: 6.994248649348648 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.819591253154464,
            "unit": "iter/sec",
            "range": "stddev: 0.002273277611342413",
            "extra": "mean: 23.353796024998985 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.24310032299732,
            "unit": "iter/sec",
            "range": "stddev: 0.0006124549013655986",
            "extra": "mean: 10.724654119564507 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.51058480579926,
            "unit": "iter/sec",
            "range": "stddev: 0.00034921439071842255",
            "extra": "mean: 18.014582326928192 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 73.61021598750395,
            "unit": "iter/sec",
            "range": "stddev: 0.0003462670569136717",
            "extra": "mean: 13.585070857145151 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8573734708624299,
            "unit": "iter/sec",
            "range": "stddev: 0.01712637481104649",
            "extra": "mean: 1.1663528602000042 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8696576402192142,
            "unit": "iter/sec",
            "range": "stddev: 0.014406461155678367",
            "extra": "mean: 1.149877783799991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 82.15780229628012,
            "unit": "iter/sec",
            "range": "stddev: 0.0001846274848529561",
            "extra": "mean: 12.171698512501195 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 240.5853580872893,
            "unit": "iter/sec",
            "range": "stddev: 0.00015263124538334228",
            "extra": "mean: 4.156528925742768 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.9938458427018086,
            "unit": "iter/sec",
            "range": "stddev: 0.0015275918244057908",
            "extra": "mean: 334.0185341999927 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 782.3804676056527,
            "unit": "iter/sec",
            "range": "stddev: 0.000014541811603652526",
            "extra": "mean: 1.2781505180725388 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 328082.5637158478,
            "unit": "iter/sec",
            "range": "stddev: 2.531923843087874e-7",
            "extra": "mean: 3.048013246037969 usec\nrounds: 27933"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23635.565586497865,
            "unit": "iter/sec",
            "range": "stddev: 0.000011903814571836347",
            "extra": "mean: 42.309120817961876 usec\nrounds: 6845"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.82436977390753,
            "unit": "iter/sec",
            "range": "stddev: 0.0005308520124275615",
            "extra": "mean: 10.77303301315917 msec\nrounds: 76"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "0ab44c45926de45737df3bb090427673e8059ac2",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-01T01:26:12Z",
          "tree_id": "89458ccba0885af65c36d0dcc9a9775fcdb7d55f",
          "url": "https://github.com/ibis-project/ibis/commit/0ab44c45926de45737df3bb090427673e8059ac2"
        },
        "date": 1643678989387,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.64886299383875,
            "unit": "iter/sec",
            "range": "stddev: 0.0006951957144510731",
            "extra": "mean: 15.232556275861953 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09132840134746034,
            "unit": "iter/sec",
            "range": "stddev: 0.051817082190627715",
            "extra": "mean: 10.949496380599987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4515.815670341846,
            "unit": "iter/sec",
            "range": "stddev: 0.00008757734830295853",
            "extra": "mean: 221.44393682134069 usec\nrounds: 1931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 32.90941966355741,
            "unit": "iter/sec",
            "range": "stddev: 0.015164390101411561",
            "extra": "mean: 30.38643677777644 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 143.0552309411574,
            "unit": "iter/sec",
            "range": "stddev: 0.003416642412176778",
            "extra": "mean: 6.990307124185679 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 128.80166793261495,
            "unit": "iter/sec",
            "range": "stddev: 0.0012813600497656823",
            "extra": "mean: 7.7638746147539734 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5970094705956152,
            "unit": "iter/sec",
            "range": "stddev: 0.022839375296205576",
            "extra": "mean: 1.675015304200008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 623.9896325506138,
            "unit": "iter/sec",
            "range": "stddev: 0.00020339627359648304",
            "extra": "mean: 1.6025907288113266 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16127.95823233822,
            "unit": "iter/sec",
            "range": "stddev: 0.000034795054881438805",
            "extra": "mean: 62.00412882982899 usec\nrounds: 5255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 281390.04508946574,
            "unit": "iter/sec",
            "range": "stddev: 0.000004937107170979606",
            "extra": "mean: 3.5537859901264732 usec\nrounds: 70922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.0085026790273628,
            "unit": "iter/sec",
            "range": "stddev: 0.010411203113384965",
            "extra": "mean: 991.5690069999982 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.77435548286348,
            "unit": "iter/sec",
            "range": "stddev: 0.0015204781568991005",
            "extra": "mean: 15.438208416671273 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 200.34971781380156,
            "unit": "iter/sec",
            "range": "stddev: 0.0009361511518198493",
            "extra": "mean: 4.991272315788171 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.846199962622443,
            "unit": "iter/sec",
            "range": "stddev: 0.0025575175146261165",
            "extra": "mean: 47.970373583339665 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.06848190888469,
            "unit": "iter/sec",
            "range": "stddev: 0.002054999708315869",
            "extra": "mean: 12.335250105261995 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6157481470594688,
            "unit": "iter/sec",
            "range": "stddev: 0.008781824964234162",
            "extra": "mean: 618.9083377999964 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 313236.6293703967,
            "unit": "iter/sec",
            "range": "stddev: 0.000024251548278910475",
            "extra": "mean: 3.1924746540977424 usec\nrounds: 68966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 29.35155607951293,
            "unit": "iter/sec",
            "range": "stddev: 0.02466615738429931",
            "extra": "mean: 34.069743944444205 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5861719891284995,
            "unit": "iter/sec",
            "range": "stddev: 0.056296532703768866",
            "extra": "mean: 1.7059839407999788 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 240818.43938638055,
            "unit": "iter/sec",
            "range": "stddev: 0.000029479930521281",
            "extra": "mean: 4.152505939944045 usec\nrounds: 25001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 117.14512224057084,
            "unit": "iter/sec",
            "range": "stddev: 0.0011420694585578934",
            "extra": "mean: 8.536420303923421 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7008.55569432645,
            "unit": "iter/sec",
            "range": "stddev: 0.000054290455758538226",
            "extra": "mean: 142.6827500007623 usec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 205.7153179829381,
            "unit": "iter/sec",
            "range": "stddev: 0.0009722059345393726",
            "extra": "mean: 4.861086718311075 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 79.88805208567476,
            "unit": "iter/sec",
            "range": "stddev: 0.001535341339477083",
            "extra": "mean: 12.5175163731313 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 36.54319064429673,
            "unit": "iter/sec",
            "range": "stddev: 0.003482423674332209",
            "extra": "mean: 27.364879266667685 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.673879995805184,
            "unit": "iter/sec",
            "range": "stddev: 0.0026204558627631455",
            "extra": "mean: 33.699671230771436 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.087714943357554,
            "unit": "iter/sec",
            "range": "stddev: 0.0030362016862907864",
            "extra": "mean: 31.164575033318442 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 193.2153377697609,
            "unit": "iter/sec",
            "range": "stddev: 0.0006804870873720165",
            "extra": "mean: 5.175572558280125 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 67.56437631281618,
            "unit": "iter/sec",
            "range": "stddev: 0.0012475944558683512",
            "extra": "mean: 14.80069904545706 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 73.44550422569397,
            "unit": "iter/sec",
            "range": "stddev: 0.0014136887531062434",
            "extra": "mean: 13.615537268653714 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.1620090302179906,
            "unit": "iter/sec",
            "range": "stddev: 0.012152621427053766",
            "extra": "mean: 462.5327581999841 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "696f9802b58d3e250fc30fc7c3a32259315223ce",
          "message": "chore(deps/poetry2nix): update",
          "timestamp": "2022-02-01T02:05:49Z",
          "tree_id": "e782e23ac609588c5e9ffdc7fcd9106546e8eafc",
          "url": "https://github.com/ibis-project/ibis/commit/696f9802b58d3e250fc30fc7c3a32259315223ce"
        },
        "date": 1643681313159,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 81.30946748685002,
            "unit": "iter/sec",
            "range": "stddev: 0.00024331948686712347",
            "extra": "mean: 12.298690803278566 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 295849.033668416,
            "unit": "iter/sec",
            "range": "stddev: 3.0057926008569837e-7",
            "extra": "mean: 3.380102302854867 usec\nrounds: 23753"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.30850656443787,
            "unit": "iter/sec",
            "range": "stddev: 0.00048263409908801526",
            "extra": "mean: 42.90279161538881 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 90.52194810932728,
            "unit": "iter/sec",
            "range": "stddev: 0.005523381077408605",
            "extra": "mean: 11.047044621623218 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.12497589923811,
            "unit": "iter/sec",
            "range": "stddev: 0.0005213464849325416",
            "extra": "mean: 29.30404999999799 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 300486.0831822038,
            "unit": "iter/sec",
            "range": "stddev: 2.9515274145970043e-7",
            "extra": "mean: 3.327941145925339 usec\nrounds: 57804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7151095006116694,
            "unit": "iter/sec",
            "range": "stddev: 0.009781659285165865",
            "extra": "mean: 1.398387238800001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 668.0836559640101,
            "unit": "iter/sec",
            "range": "stddev: 0.00002668404017033352",
            "extra": "mean: 1.4968185362311428 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 140.1535600458491,
            "unit": "iter/sec",
            "range": "stddev: 0.00007920438859680065",
            "extra": "mean: 7.135031030769859 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8449399401609623,
            "unit": "iter/sec",
            "range": "stddev: 0.0049128009123626465",
            "extra": "mean: 542.0230644000014 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 29.664405371720417,
            "unit": "iter/sec",
            "range": "stddev: 0.027934581096393536",
            "extra": "mean: 33.710434693335095 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.6063173685376895,
            "unit": "iter/sec",
            "range": "stddev: 0.002296966517745667",
            "extra": "mean: 383.6831277999977 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 252.31139036564326,
            "unit": "iter/sec",
            "range": "stddev: 0.00010288458184098117",
            "extra": "mean: 3.9633565434791724 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.39897048229312,
            "unit": "iter/sec",
            "range": "stddev: 0.000539982021233822",
            "extra": "mean: 18.726952803923364 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 348156.8641300144,
            "unit": "iter/sec",
            "range": "stddev: 2.609326790964805e-7",
            "extra": "mean: 2.872268517522503 usec\nrounds: 55866"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 207.07697484138114,
            "unit": "iter/sec",
            "range": "stddev: 0.00004391036861208001",
            "extra": "mean: 4.8291221212111575 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 242.49080130680528,
            "unit": "iter/sec",
            "range": "stddev: 0.00014995419545264224",
            "extra": "mean: 4.123867769873777 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 43.87849646767918,
            "unit": "iter/sec",
            "range": "stddev: 0.0006359992147296773",
            "extra": "mean: 22.790206604654248 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 167.81738118451028,
            "unit": "iter/sec",
            "range": "stddev: 0.00021639854388331552",
            "extra": "mean: 5.958858331250738 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.148187129866664,
            "unit": "iter/sec",
            "range": "stddev: 0.0025191589087456678",
            "extra": "mean: 870.938172000001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 66.26913339739818,
            "unit": "iter/sec",
            "range": "stddev: 0.00007202763326729355",
            "extra": "mean: 15.089981545454487 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5397.20803096599,
            "unit": "iter/sec",
            "range": "stddev: 0.00004139531081741605",
            "extra": "mean: 185.28098125226805 usec\nrounds: 2667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8923.527693990494,
            "unit": "iter/sec",
            "range": "stddev: 0.000003171474892376664",
            "extra": "mean: 112.0633043671109 usec\nrounds: 4511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 70.90949199895618,
            "unit": "iter/sec",
            "range": "stddev: 0.00007721910448155876",
            "extra": "mean: 14.102484333334672 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 35.13159596730621,
            "unit": "iter/sec",
            "range": "stddev: 0.0004647519265111007",
            "extra": "mean: 28.464405685714055 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.64937489493569,
            "unit": "iter/sec",
            "range": "stddev: 0.00025889250517207793",
            "extra": "mean: 12.399352150004006 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7001576475099172,
            "unit": "iter/sec",
            "range": "stddev: 0.007910320891348422",
            "extra": "mean: 1.4282497713999986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 34.26770699504194,
            "unit": "iter/sec",
            "range": "stddev: 0.020977262010590046",
            "extra": "mean: 29.181993418605046 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 20000.40320360971,
            "unit": "iter/sec",
            "range": "stddev: 0.00001838163452850627",
            "extra": "mean: 49.998992011296956 usec\nrounds: 5883"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 134.62393090282072,
            "unit": "iter/sec",
            "range": "stddev: 0.00011644046500530422",
            "extra": "mean: 7.4280998429755964 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.12792683578278566,
            "unit": "iter/sec",
            "range": "stddev: 0.028882210197306624",
            "extra": "mean: 7.816968143400009 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29585319+EdAbati@users.noreply.github.com",
            "name": "Edoardo Abati",
            "username": "EdAbati"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "a80b567c9106f0e7f5652eb1c7fd8dba0ac28490",
          "message": "refactor: using ibis.expr.api.schema inside ibis.expr.api.table\n\nfixes #3040",
          "timestamp": "2022-02-01T04:37:50-05:00",
          "tree_id": "fd16e40d005684db5b633c7d111e97e1021a6d52",
          "url": "https://github.com/ibis-project/ibis/commit/a80b567c9106f0e7f5652eb1c7fd8dba0ac28490"
        },
        "date": 1643709376601,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 382489.735544128,
            "unit": "iter/sec",
            "range": "stddev: 1.8098621370730352e-7",
            "extra": "mean: 2.614449244180122 usec\nrounds: 24214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3381508448032127,
            "unit": "iter/sec",
            "range": "stddev: 0.0018402881605892234",
            "extra": "mean: 747.2999055999992 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 227.65739651977543,
            "unit": "iter/sec",
            "range": "stddev: 0.00034503171789691426",
            "extra": "mean: 4.392565386792233 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.87356992248466,
            "unit": "iter/sec",
            "range": "stddev: 0.00009659077432945725",
            "extra": "mean: 9.81608871428475 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.448371073603,
            "unit": "iter/sec",
            "range": "stddev: 0.00019096359322683598",
            "extra": "mean: 10.055468874999343 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 793.0882016820722,
            "unit": "iter/sec",
            "range": "stddev: 0.00001692302714387466",
            "extra": "mean: 1.260893804597125 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 197.11121783809782,
            "unit": "iter/sec",
            "range": "stddev: 0.00008593294792609723",
            "extra": "mean: 5.073277974576641 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.97120825307117,
            "unit": "iter/sec",
            "range": "stddev: 0.0010638381982689005",
            "extra": "mean: 21.289637571429004 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9311358465279541,
            "unit": "iter/sec",
            "range": "stddev: 0.004704844854045582",
            "extra": "mean: 1.0739571500000011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9986.47765076889,
            "unit": "iter/sec",
            "range": "stddev: 0.000004329545006622449",
            "extra": "mean: 100.13540659383611 usec\nrounds: 364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 36.66095537863077,
            "unit": "iter/sec",
            "range": "stddev: 0.02158175553061157",
            "extra": "mean: 27.276976000000484 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.35270990100705,
            "unit": "iter/sec",
            "range": "stddev: 0.00021260200311780337",
            "extra": "mean: 6.159429064102103 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.578840468426385,
            "unit": "iter/sec",
            "range": "stddev: 0.00047162168030101423",
            "extra": "mean: 21.940005268293856 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 74.43517514508005,
            "unit": "iter/sec",
            "range": "stddev: 0.0004540683910204194",
            "extra": "mean: 13.434508591548562 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1420084423921293,
            "unit": "iter/sec",
            "range": "stddev: 0.0030711599403752676",
            "extra": "mean: 466.85156799999845 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14906857113516866,
            "unit": "iter/sec",
            "range": "stddev: 0.033401575339443206",
            "extra": "mean: 6.708322166000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 324437.35005999584,
            "unit": "iter/sec",
            "range": "stddev: 1.7153956892654762e-7",
            "extra": "mean: 3.0822591782822704 usec\nrounds: 28818"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 83.0412974712789,
            "unit": "iter/sec",
            "range": "stddev: 0.00005873888418597689",
            "extra": "mean: 12.04220105479283 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 326712.79299523286,
            "unit": "iter/sec",
            "range": "stddev: 1.7503077215629772e-7",
            "extra": "mean: 3.0607922965985335 usec\nrounds: 89286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6357.7141770719945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000354722179420317",
            "extra": "mean: 157.2892351163455 usec\nrounds: 2654"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 277.27706685930826,
            "unit": "iter/sec",
            "range": "stddev: 0.0001255443741177311",
            "extra": "mean: 3.6065009318185153 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 106.78551245578602,
            "unit": "iter/sec",
            "range": "stddev: 0.0008925003327223879",
            "extra": "mean: 9.364566194445569 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.930527496230401,
            "unit": "iter/sec",
            "range": "stddev: 0.0023255197084932925",
            "extra": "mean: 1.0746592702000044 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.17239321079432,
            "unit": "iter/sec",
            "range": "stddev: 0.0009407602011237505",
            "extra": "mean: 36.80205833333616 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23318.9203690386,
            "unit": "iter/sec",
            "range": "stddev: 0.000011556482698207545",
            "extra": "mean: 42.88363201101443 usec\nrounds: 6579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 80.9075063893286,
            "unit": "iter/sec",
            "range": "stddev: 0.00007880414620425262",
            "extra": "mean: 12.359792615384526 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 38.42693615833586,
            "unit": "iter/sec",
            "range": "stddev: 0.019125044792812417",
            "extra": "mean: 26.02341222000007 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.65997987337917,
            "unit": "iter/sec",
            "range": "stddev: 0.00003594282707498085",
            "extra": "mean: 6.110229273972062 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.074330827655789,
            "unit": "iter/sec",
            "range": "stddev: 0.0017670377652363137",
            "extra": "mean: 325.27403719999484 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.138011525533464,
            "unit": "iter/sec",
            "range": "stddev: 0.0006556113869739561",
            "extra": "mean: 17.50148409615421 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 294.9955813531355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000778926478607059",
            "extra": "mean: 3.3898812836891703 msec\nrounds: 282"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "saul@voltrondata.com",
            "name": "Saul Pwanson",
            "username": "saulpw"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "327b34254918eecca28f3066152d9e53445997d0",
          "message": "fix(api): add ibis.map and .struct\n\nPrefer these instead of the more generic ibis.literal to create compound literals.\nLike .array() for array types.\n\ncloses #3118",
          "timestamp": "2022-02-01T04:42:35-05:00",
          "tree_id": "46115a08b3c46592ee3ce7bb73c162c8e9c26c50",
          "url": "https://github.com/ibis-project/ibis/commit/327b34254918eecca28f3066152d9e53445997d0"
        },
        "date": 1643709651739,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 41.35730715632591,
            "unit": "iter/sec",
            "range": "stddev: 0.013554991973957644",
            "extra": "mean: 24.179523976745244 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.896751635074885,
            "unit": "iter/sec",
            "range": "stddev: 0.0004167820757965612",
            "extra": "mean: 21.78803432432432 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1512463107303399,
            "unit": "iter/sec",
            "range": "stddev: 0.030554606458220644",
            "extra": "mean: 6.611731520399994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 244.37316286335925,
            "unit": "iter/sec",
            "range": "stddev: 0.00012618938030810052",
            "extra": "mean: 4.092102374429502 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 779.5487642387747,
            "unit": "iter/sec",
            "range": "stddev: 0.000027763634707319968",
            "extra": "mean: 1.2827933875009023 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.18044298094695,
            "unit": "iter/sec",
            "range": "stddev: 0.0004156109571415006",
            "extra": "mean: 38.19645071428925 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 326184.93213373993,
            "unit": "iter/sec",
            "range": "stddev: 2.4717589809572173e-7",
            "extra": "mean: 3.0657455372279045 usec\nrounds: 26385"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3396052260399376,
            "unit": "iter/sec",
            "range": "stddev: 0.0046651389255778705",
            "extra": "mean: 746.4885777999996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.43392150459124,
            "unit": "iter/sec",
            "range": "stddev: 0.00008461738956163591",
            "extra": "mean: 6.118680814814247 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.908560895666135,
            "unit": "iter/sec",
            "range": "stddev: 0.0004774422879936866",
            "extra": "mean: 17.26860389091175 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 278.08432642772937,
            "unit": "iter/sec",
            "range": "stddev: 0.00012971785558583312",
            "extra": "mean: 3.59603150902461 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6304.3028813457095,
            "unit": "iter/sec",
            "range": "stddev: 0.00003430032669395507",
            "extra": "mean: 158.62182049643863 usec\nrounds: 3142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 387158.91796808847,
            "unit": "iter/sec",
            "range": "stddev: 3.207450601594544e-7",
            "extra": "mean: 2.582918676517287 usec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 282.89756546163574,
            "unit": "iter/sec",
            "range": "stddev: 0.00020481021294445196",
            "extra": "mean: 3.5348483765428935 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18843.895914636232,
            "unit": "iter/sec",
            "range": "stddev: 0.0006952811937327004",
            "extra": "mean: 53.06758244314492 usec\nrounds: 5992"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 83.20184420318516,
            "unit": "iter/sec",
            "range": "stddev: 0.00009820862500778429",
            "extra": "mean: 12.018964358024622 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10306.72382118843,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018405598932739937",
            "extra": "mean: 97.02404152367144 usec\nrounds: 6117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 326781.59656634636,
            "unit": "iter/sec",
            "range": "stddev: 1.8384185088051494e-7",
            "extra": "mean: 3.0601478495346366 usec\nrounds: 70423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 75.84680534364874,
            "unit": "iter/sec",
            "range": "stddev: 0.000675161354703202",
            "extra": "mean: 13.184470927538387 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.67007297547494,
            "unit": "iter/sec",
            "range": "stddev: 0.0002769633709736672",
            "extra": "mean: 9.83573603061367 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9250994814515809,
            "unit": "iter/sec",
            "range": "stddev: 0.0029467159449834027",
            "extra": "mean: 1.0809648260000018 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.0722974674502836,
            "unit": "iter/sec",
            "range": "stddev: 0.0021146515493881786",
            "extra": "mean: 325.489315599998 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 81.25903779590095,
            "unit": "iter/sec",
            "range": "stddev: 0.00003819630998226714",
            "extra": "mean: 12.306323421053902 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 114.49286655629442,
            "unit": "iter/sec",
            "range": "stddev: 0.00037482569225609844",
            "extra": "mean: 8.734168600000203 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 156.538213528275,
            "unit": "iter/sec",
            "range": "stddev: 0.0004928301712807177",
            "extra": "mean: 6.388216509314979 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9206552303126866,
            "unit": "iter/sec",
            "range": "stddev: 0.004278057370630004",
            "extra": "mean: 1.0861829347999958 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.38038622244656,
            "unit": "iter/sec",
            "range": "stddev: 0.0003834223775907208",
            "extra": "mean: 10.164627710841808 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 197.41692446953448,
            "unit": "iter/sec",
            "range": "stddev: 0.00008295216736610366",
            "extra": "mean: 5.065421835980029 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.59036411181629,
            "unit": "iter/sec",
            "range": "stddev: 0.0010952234434492582",
            "extra": "mean: 21.934459605265932 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.144566805300836,
            "unit": "iter/sec",
            "range": "stddev: 0.0026391208319037933",
            "extra": "mean: 466.2946369999986 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 37.08623453692009,
            "unit": "iter/sec",
            "range": "stddev: 0.025810149461277396",
            "extra": "mean: 26.964182600001624 msec\nrounds: 15"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "9ad5bc7b53b82108ee7cd40cd216bd9b6a870d91",
          "message": "chore(deps/poetry2nix): update",
          "timestamp": "2022-02-02T01:15:12Z",
          "tree_id": "235028858cb2e8723fbcb2395bf9148e6888ed27",
          "url": "https://github.com/ibis-project/ibis/commit/9ad5bc7b53b82108ee7cd40cd216bd9b6a870d91"
        },
        "date": 1643764708919,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 261.20734371467347,
            "unit": "iter/sec",
            "range": "stddev: 0.0004449690847539198",
            "extra": "mean: 3.8283762844445035 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 77.1874390776958,
            "unit": "iter/sec",
            "range": "stddev: 0.0008256910053242358",
            "extra": "mean: 12.955475812501227 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 39.14034310040769,
            "unit": "iter/sec",
            "range": "stddev: 0.015389357481386179",
            "extra": "mean: 25.549086205879068 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 48.86540537177049,
            "unit": "iter/sec",
            "range": "stddev: 0.0022388758140134816",
            "extra": "mean: 20.464375408163484 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9380528161584077,
            "unit": "iter/sec",
            "range": "stddev: 0.021764977059023808",
            "extra": "mean: 1.066038055399997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 26497.925544238813,
            "unit": "iter/sec",
            "range": "stddev: 0.000016586706249506804",
            "extra": "mean: 37.73880330105389 usec\nrounds: 8058"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 39.84791916415842,
            "unit": "iter/sec",
            "range": "stddev: 0.021492684395400235",
            "extra": "mean: 25.095413285707007 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.75836829587208,
            "unit": "iter/sec",
            "range": "stddev: 0.0015196401976891299",
            "extra": "mean: 16.7340579824546 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 446995.81263796345,
            "unit": "iter/sec",
            "range": "stddev: 4.666277588863038e-7",
            "extra": "mean: 2.2371574223446538 usec\nrounds: 68961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 79.25863275365522,
            "unit": "iter/sec",
            "range": "stddev: 0.0013291325778629931",
            "extra": "mean: 12.616922160493392 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.431379336085979,
            "unit": "iter/sec",
            "range": "stddev: 0.00152523619421513",
            "extra": "mean: 291.42799500000933 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 871.1851196168074,
            "unit": "iter/sec",
            "range": "stddev: 0.00002712031418229844",
            "extra": "mean: 1.147861662788561 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 380254.60501599545,
            "unit": "iter/sec",
            "range": "stddev: 4.2541294944221065e-7",
            "extra": "mean: 2.6298169353082126 usec\nrounds: 84746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 7394.160815722725,
            "unit": "iter/sec",
            "range": "stddev: 0.000027948247894517428",
            "extra": "mean: 135.24185163428277 usec\nrounds: 2723"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 221.16138621139766,
            "unit": "iter/sec",
            "range": "stddev: 0.00011085433308602127",
            "extra": "mean: 4.521584970733307 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 120.95388396045348,
            "unit": "iter/sec",
            "range": "stddev: 0.0048650613021289256",
            "extra": "mean: 8.267613798387453 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.488691998891654,
            "unit": "iter/sec",
            "range": "stddev: 0.003646248677335673",
            "extra": "mean: 671.7306203999954 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 109.25986597683136,
            "unit": "iter/sec",
            "range": "stddev: 0.0005654895673467701",
            "extra": "mean: 9.152491549019938 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 187.04716462592182,
            "unit": "iter/sec",
            "range": "stddev: 0.00008811980903715648",
            "extra": "mean: 5.3462451676287825 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.375335083353846,
            "unit": "iter/sec",
            "range": "stddev: 0.003040140006013713",
            "extra": "mean: 420.99323460000164 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.940715549894613,
            "unit": "iter/sec",
            "range": "stddev: 0.019294617486146776",
            "extra": "mean: 1.063020591199995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16010690906505662,
            "unit": "iter/sec",
            "range": "stddev: 0.022748344273217386",
            "extra": "mean: 6.2458266532000035 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.36659348384727,
            "unit": "iter/sec",
            "range": "stddev: 0.0010282371020267273",
            "extra": "mean: 21.567251869567908 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.89999597104584,
            "unit": "iter/sec",
            "range": "stddev: 0.0008005292766614522",
            "extra": "mean: 9.813543076921642 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 369781.14296915213,
            "unit": "iter/sec",
            "range": "stddev: 2.6524131264561424e-7",
            "extra": "mean: 2.704302312363781 usec\nrounds: 25907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 92.8700666538226,
            "unit": "iter/sec",
            "range": "stddev: 0.00012575953076487582",
            "extra": "mean: 10.767732123285164 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 336.64920714974284,
            "unit": "iter/sec",
            "range": "stddev: 0.00012831099700787857",
            "extra": "mean: 2.9704510771510484 msec\nrounds: 337"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 314.9830626420221,
            "unit": "iter/sec",
            "range": "stddev: 0.00011296407208953506",
            "extra": "mean: 3.1747738802593934 msec\nrounds: 309"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11577.43543102063,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029710730388472566",
            "extra": "mean: 86.37491489009696 usec\nrounds: 6192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 29.594629690625975,
            "unit": "iter/sec",
            "range": "stddev: 0.002020708277339644",
            "extra": "mean: 33.78991426666668 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 182.99266605906433,
            "unit": "iter/sec",
            "range": "stddev: 0.00007868878621161539",
            "extra": "mean: 5.464699878612791 msec\nrounds: 173"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "e42f2200686e639cae83690fefbca9d8abcd5523",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-02T01:58:02Z",
          "tree_id": "c4214d3c2b0658fcde1f38841c6abfe758acc6d9",
          "url": "https://github.com/ibis-project/ibis/commit/e42f2200686e639cae83690fefbca9d8abcd5523"
        },
        "date": 1643767277224,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 86.18646290693381,
            "unit": "iter/sec",
            "range": "stddev: 0.001210779351955046",
            "extra": "mean: 11.602750203124401 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 343052.81572072953,
            "unit": "iter/sec",
            "range": "stddev: 0.000003650884773568855",
            "extra": "mean: 2.9150030379405902 usec\nrounds: 64517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 196.13435578400967,
            "unit": "iter/sec",
            "range": "stddev: 0.000420483190014043",
            "extra": "mean: 5.098545820810896 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 203.62710921310475,
            "unit": "iter/sec",
            "range": "stddev: 0.0023890941001742188",
            "extra": "mean: 4.910937467336217 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5476261529614634,
            "unit": "iter/sec",
            "range": "stddev: 0.045133434277015744",
            "extra": "mean: 1.8260632634000047 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 281464.2621056883,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034067374075537196",
            "extra": "mean: 3.5528489212762135 usec\nrounds: 22624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 32.45192895895958,
            "unit": "iter/sec",
            "range": "stddev: 0.019995311395202178",
            "extra": "mean: 30.81480922951153 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 288095.86456261744,
            "unit": "iter/sec",
            "range": "stddev: 0.00000353735422050243",
            "extra": "mean: 3.471066832278846 usec\nrounds: 76924"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8670688781127127,
            "unit": "iter/sec",
            "range": "stddev: 0.03468056295656594",
            "extra": "mean: 535.5988799999864 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8825223609668078,
            "unit": "iter/sec",
            "range": "stddev: 0.06936606147546297",
            "extra": "mean: 1.133115764799993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08921961593165816,
            "unit": "iter/sec",
            "range": "stddev: 0.048299511101228536",
            "extra": "mean: 11.208297520199995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 62.65970713276723,
            "unit": "iter/sec",
            "range": "stddev: 0.001842293086857996",
            "extra": "mean: 15.959219181812305 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.126864040381367,
            "unit": "iter/sec",
            "range": "stddev: 0.0023466599598242306",
            "extra": "mean: 47.33310149999662 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4636.590537188819,
            "unit": "iter/sec",
            "range": "stddev: 0.000056884301038040774",
            "extra": "mean: 215.67571947086432 usec\nrounds: 606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 31.76435593159297,
            "unit": "iter/sec",
            "range": "stddev: 0.018771536070782323",
            "extra": "mean: 31.481828315788253 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5419044722680799,
            "unit": "iter/sec",
            "range": "stddev: 0.05391948692143025",
            "extra": "mean: 1.8453436927999747 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.57510648231395,
            "unit": "iter/sec",
            "range": "stddev: 0.001704065673471958",
            "extra": "mean: 32.70634562069133 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.13318068509201,
            "unit": "iter/sec",
            "range": "stddev: 0.0008846259840331667",
            "extra": "mean: 15.121002644069463 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.4042882644567565,
            "unit": "iter/sec",
            "range": "stddev: 0.05588797612038139",
            "extra": "mean: 712.1045053999978 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 118.99241302287659,
            "unit": "iter/sec",
            "range": "stddev: 0.0007192688969542186",
            "extra": "mean: 8.403897144330937 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 149.5934727069953,
            "unit": "iter/sec",
            "range": "stddev: 0.0004013016347252505",
            "extra": "mean: 6.684783646668014 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.8539216852467,
            "unit": "iter/sec",
            "range": "stddev: 0.006228285088567057",
            "extra": "mean: 12.844568113638129 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 69.49623766761619,
            "unit": "iter/sec",
            "range": "stddev: 0.00044384496412616924",
            "extra": "mean: 14.389268161288959 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 43.00608792710088,
            "unit": "iter/sec",
            "range": "stddev: 0.0008280273897875065",
            "extra": "mean: 23.252521868417524 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 77.59595355505861,
            "unit": "iter/sec",
            "range": "stddev: 0.0007032857519709372",
            "extra": "mean: 12.887269943663297 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 126.59487256387588,
            "unit": "iter/sec",
            "range": "stddev: 0.0009597269869499211",
            "extra": "mean: 7.899214081482097 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 15562.873745231256,
            "unit": "iter/sec",
            "range": "stddev: 0.00005915561379246132",
            "extra": "mean: 64.25548496828344 usec\nrounds: 7118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 632.4861816824856,
            "unit": "iter/sec",
            "range": "stddev: 0.00015223843879545937",
            "extra": "mean: 1.5810622096752938 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7243.143541706394,
            "unit": "iter/sec",
            "range": "stddev: 0.00007516949383094849",
            "extra": "mean: 138.06160187796203 usec\nrounds: 3941"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.39691118314852,
            "unit": "iter/sec",
            "range": "stddev: 0.002455478550317104",
            "extra": "mean: 30.867140214285524 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 222.94682564804475,
            "unit": "iter/sec",
            "range": "stddev: 0.00046696661477275584",
            "extra": "mean: 4.4853744703172005 msec\nrounds: 219"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "1e69defd7a79df36599b1a78a4d772e348a9cf66",
          "message": "docs: move to mkdocs",
          "timestamp": "2022-02-02T11:34:13-05:00",
          "tree_id": "5f3b4423e3abf15cc10f3547805dceec91831b12",
          "url": "https://github.com/ibis-project/ibis/commit/1e69defd7a79df36599b1a78a4d772e348a9cf66"
        },
        "date": 1643820760237,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.3211453152680965,
            "unit": "iter/sec",
            "range": "stddev: 0.009297580647088277",
            "extra": "mean: 430.8217988000024 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.666882161748176,
            "unit": "iter/sec",
            "range": "stddev: 0.01264996206425351",
            "extra": "mean: 599.922431799996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 347446.66804639425,
            "unit": "iter/sec",
            "range": "stddev: 0.000004614009802290609",
            "extra": "mean: 2.8781395591523444 usec\nrounds: 58477"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 207.67486933931693,
            "unit": "iter/sec",
            "range": "stddev: 0.0005140844459044975",
            "extra": "mean: 4.815219112362193 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4519.874646641552,
            "unit": "iter/sec",
            "range": "stddev: 0.0001868485687271455",
            "extra": "mean: 221.2450738524441 usec\nrounds: 2004"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16306.007392059424,
            "unit": "iter/sec",
            "range": "stddev: 0.000045986854186864026",
            "extra": "mean: 61.32709105031882 usec\nrounds: 5821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 155.92348932445665,
            "unit": "iter/sec",
            "range": "stddev: 0.0007531906308634359",
            "extra": "mean: 6.413401882760135 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.0870069145749014,
            "unit": "iter/sec",
            "range": "stddev: 0.15220571140376696",
            "extra": "mean: 11.493339407400004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 70.6786594265636,
            "unit": "iter/sec",
            "range": "stddev: 0.0013698377683228282",
            "extra": "mean: 14.14854226315679 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 607.0769720172834,
            "unit": "iter/sec",
            "range": "stddev: 0.0004755818351002257",
            "extra": "mean: 1.6472375762781035 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 183.9732868322546,
            "unit": "iter/sec",
            "range": "stddev: 0.000917086949474269",
            "extra": "mean: 5.435571746412251 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5812550865102237,
            "unit": "iter/sec",
            "range": "stddev: 0.020615734920814754",
            "extra": "mean: 1.7204150521999964 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 28.506765839637453,
            "unit": "iter/sec",
            "range": "stddev: 0.02255781751949099",
            "extra": "mean: 35.079391524995174 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5748431769524158,
            "unit": "iter/sec",
            "range": "stddev: 0.035262555040332065",
            "extra": "mean: 1.7396048872000052 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.0170562638055587,
            "unit": "iter/sec",
            "range": "stddev: 0.020026775064846215",
            "extra": "mean: 983.2297735999987 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.6393657324266,
            "unit": "iter/sec",
            "range": "stddev: 0.001467683713737768",
            "extra": "mean: 15.470448830508033 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.93781881011976,
            "unit": "iter/sec",
            "range": "stddev: 0.0032503926657313563",
            "extra": "mean: 24.427290682932078 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 227.60436744182667,
            "unit": "iter/sec",
            "range": "stddev: 0.0003454343114366407",
            "extra": "mean: 4.393588801654211 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 57.36523088044711,
            "unit": "iter/sec",
            "range": "stddev: 0.000960050577006146",
            "extra": "mean: 17.432162037037127 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.371563217547408,
            "unit": "iter/sec",
            "range": "stddev: 0.0027906625018824563",
            "extra": "mean: 46.79114905263161 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 89.07651276212201,
            "unit": "iter/sec",
            "range": "stddev: 0.0010304478503304286",
            "extra": "mean: 11.226303870589216 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 128.50900780594446,
            "unit": "iter/sec",
            "range": "stddev: 0.0009742423633907689",
            "extra": "mean: 7.781555682929667 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7522.158413896939,
            "unit": "iter/sec",
            "range": "stddev: 0.00007155480173645762",
            "extra": "mean: 132.9405663875056 usec\nrounds: 5016"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 66.71967578604576,
            "unit": "iter/sec",
            "range": "stddev: 0.001543618574343043",
            "extra": "mean: 14.988082424242645 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 34.641890677766426,
            "unit": "iter/sec",
            "range": "stddev: 0.0024451513893745396",
            "extra": "mean: 28.866784705888236 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 126.90299933392869,
            "unit": "iter/sec",
            "range": "stddev: 0.0008079362601042917",
            "extra": "mean: 7.880034398309456 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 302650.4080475644,
            "unit": "iter/sec",
            "range": "stddev: 0.000003228649680165449",
            "extra": "mean: 3.3041422493071297 usec\nrounds: 17153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 30.007075007110622,
            "unit": "iter/sec",
            "range": "stddev: 0.02354318348371618",
            "extra": "mean: 33.32547406780018 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 86.12264995236758,
            "unit": "iter/sec",
            "range": "stddev: 0.0010862890451582758",
            "extra": "mean: 11.61134731168951 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.626883005439307,
            "unit": "iter/sec",
            "range": "stddev: 0.0028619416669493324",
            "extra": "mean: 33.753128866658244 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 275371.95835655346,
            "unit": "iter/sec",
            "range": "stddev: 0.000010411000237915352",
            "extra": "mean: 3.631451822357284 usec\nrounds: 31747"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "7fe557333b49551b86c0ad121386687763420723",
          "message": "fix: implement count on tables for pyspark\n\nCloses #2879.",
          "timestamp": "2022-02-02T11:34:42-05:00",
          "tree_id": "ab6aaeb24ef496138ea7e36af396e19032368273",
          "url": "https://github.com/ibis-project/ibis/commit/7fe557333b49551b86c0ad121386687763420723"
        },
        "date": 1643821473200,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 257.92460758173894,
            "unit": "iter/sec",
            "range": "stddev: 0.00005301268955914411",
            "extra": "mean: 3.877101953845524 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 72.98167771465322,
            "unit": "iter/sec",
            "range": "stddev: 0.0008830232921892116",
            "extra": "mean: 13.702069222220972 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 344577.74242244026,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027054458546146847",
            "extra": "mean: 2.9021027097392578 usec\nrounds: 64103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4504.347479149204,
            "unit": "iter/sec",
            "range": "stddev: 0.001268829903473324",
            "extra": "mean: 222.00773910739304 usec\nrounds: 1905"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8577.197595300704,
            "unit": "iter/sec",
            "range": "stddev: 0.000047017274745255376",
            "extra": "mean: 116.58819665619949 usec\nrounds: 4546"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 206.86600133666107,
            "unit": "iter/sec",
            "range": "stddev: 0.00023422065864292348",
            "extra": "mean: 4.834047129728991 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 132.70695036739923,
            "unit": "iter/sec",
            "range": "stddev: 0.005430888071704634",
            "extra": "mean: 7.535400348146797 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 42.88208023078525,
            "unit": "iter/sec",
            "range": "stddev: 0.00025264665274705913",
            "extra": "mean: 23.31976421428584 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 20068.42744618834,
            "unit": "iter/sec",
            "range": "stddev: 0.00001465745345542955",
            "extra": "mean: 49.829514678288014 usec\nrounds: 5893"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.615462107824958,
            "unit": "iter/sec",
            "range": "stddev: 0.001849151500428102",
            "extra": "mean: 382.34161260000405 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.57278292673814,
            "unit": "iter/sec",
            "range": "stddev: 0.00007650064242313913",
            "extra": "mean: 15.486400843751191 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.12889209830213672,
            "unit": "iter/sec",
            "range": "stddev: 0.0541563063087438",
            "extra": "mean: 7.758427499999994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8652643494884389,
            "unit": "iter/sec",
            "range": "stddev: 0.004535568084040563",
            "extra": "mean: 536.1170389999984 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 171.49515829649093,
            "unit": "iter/sec",
            "range": "stddev: 0.00010465261189388554",
            "extra": "mean: 5.831068409938088 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 71.02385539614818,
            "unit": "iter/sec",
            "range": "stddev: 0.00015912953469361934",
            "extra": "mean: 14.079776357145386 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 304024.70511782414,
            "unit": "iter/sec",
            "range": "stddev: 4.2309526655010703e-7",
            "extra": "mean: 3.289206380818467 usec\nrounds: 75758"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 673.1759366430538,
            "unit": "iter/sec",
            "range": "stddev: 0.000019648499384467073",
            "extra": "mean: 1.4854957605685215 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 90.26648528439574,
            "unit": "iter/sec",
            "range": "stddev: 0.008675443531477832",
            "extra": "mean: 11.078308819152271 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7905482550255818,
            "unit": "iter/sec",
            "range": "stddev: 0.006961917233789538",
            "extra": "mean: 1.2649449209999717 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 60.368902790799204,
            "unit": "iter/sec",
            "range": "stddev: 0.0007327984845665075",
            "extra": "mean: 16.56481986206331 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 299067.32320828864,
            "unit": "iter/sec",
            "range": "stddev: 2.6611191621954475e-7",
            "extra": "mean: 3.3437287272723517 usec\nrounds: 24938"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 238.98058497010345,
            "unit": "iter/sec",
            "range": "stddev: 0.00015923198368170564",
            "extra": "mean: 4.184440339055578 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 34.13379157225992,
            "unit": "iter/sec",
            "range": "stddev: 0.0208737784272282",
            "extra": "mean: 29.29648169565454 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.206705161157423,
            "unit": "iter/sec",
            "range": "stddev: 0.00045835116781128084",
            "extra": "mean: 43.09099430770402 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.1527298654959022,
            "unit": "iter/sec",
            "range": "stddev: 0.004886434182760771",
            "extra": "mean: 867.5059352000062 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 28.986417189366538,
            "unit": "iter/sec",
            "range": "stddev: 0.0300673485968678",
            "extra": "mean: 34.498916974355936 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 136.7555729124037,
            "unit": "iter/sec",
            "range": "stddev: 0.00007065006716618685",
            "extra": "mean: 7.312316263999946 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 80.68662685293947,
            "unit": "iter/sec",
            "range": "stddev: 0.00031286264985411005",
            "extra": "mean: 12.393627531643048 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7859391555378547,
            "unit": "iter/sec",
            "range": "stddev: 0.005603169463932525",
            "extra": "mean: 1.2723631249999925 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.88461407322962,
            "unit": "iter/sec",
            "range": "stddev: 0.00047206515871786386",
            "extra": "mean: 26.39593999999671 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.359426249947454,
            "unit": "iter/sec",
            "range": "stddev: 0.0010127738806115655",
            "extra": "mean: 26.767006358974974 msec\nrounds: 39"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "fb3734a834bec7bd77ee30e99bc1736cd93c7943",
          "message": "ci: add curl to shell.nix to fix docs building",
          "timestamp": "2022-02-02T11:48:43-05:00",
          "tree_id": "0e2e3ad72f7f66171b2bc4320937fbf501ee1c68",
          "url": "https://github.com/ibis-project/ibis/commit/fb3734a834bec7bd77ee30e99bc1736cd93c7943"
        },
        "date": 1643823926418,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 154.91947472967178,
            "unit": "iter/sec",
            "range": "stddev: 0.003558275331624206",
            "extra": "mean: 6.45496637362707 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6248087796160307,
            "unit": "iter/sec",
            "range": "stddev: 0.007156640582226474",
            "extra": "mean: 1.600489674000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6201166796686469,
            "unit": "iter/sec",
            "range": "stddev: 0.022547664696957383",
            "extra": "mean: 1.6125997458 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 208.44199882971571,
            "unit": "iter/sec",
            "range": "stddev: 0.0007162111256680706",
            "extra": "mean: 4.797497652173919 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 35.500804633166936,
            "unit": "iter/sec",
            "range": "stddev: 0.013957070323978764",
            "extra": "mean: 28.168375627907352 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.0762464132511622,
            "unit": "iter/sec",
            "range": "stddev: 0.015349390895083461",
            "extra": "mean: 929.1552451999962 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.522661274802694,
            "unit": "iter/sec",
            "range": "stddev: 0.002001733580986519",
            "extra": "mean: 40.778608357140705 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7211.898189622335,
            "unit": "iter/sec",
            "range": "stddev: 0.00013521978223080631",
            "extra": "mean: 138.65975000021 usec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 137.87705197186233,
            "unit": "iter/sec",
            "range": "stddev: 0.00047583411077035666",
            "extra": "mean: 7.2528385666679185 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 73.75909301827232,
            "unit": "iter/sec",
            "range": "stddev: 0.0006824266379440475",
            "extra": "mean: 13.557650441177065 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 317989.11045921175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034147352315883848",
            "extra": "mean: 3.1447617767661553 usec\nrounds: 29762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 362787.0895736471,
            "unit": "iter/sec",
            "range": "stddev: 0.000002975892003710703",
            "extra": "mean: 2.7564376703019264 usec\nrounds: 76336"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 630.7442381848916,
            "unit": "iter/sec",
            "range": "stddev: 0.00018429318250035105",
            "extra": "mean: 1.585428672131393 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 91.66920373920003,
            "unit": "iter/sec",
            "range": "stddev: 0.0010955245481547823",
            "extra": "mean: 10.9087889848483 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 34.87322626200913,
            "unit": "iter/sec",
            "range": "stddev: 0.017310980618882428",
            "extra": "mean: 28.675293547170288 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.503959478052565,
            "unit": "iter/sec",
            "range": "stddev: 0.0007704810266667327",
            "extra": "mean: 21.50354531579075 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 289619.2407141923,
            "unit": "iter/sec",
            "range": "stddev: 0.000005024191677823405",
            "extra": "mean: 3.4528092730787856 usec\nrounds: 21460"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 71.52038888821255,
            "unit": "iter/sec",
            "range": "stddev: 0.001061890654513766",
            "extra": "mean: 13.98202688135568 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.90967685781855,
            "unit": "iter/sec",
            "range": "stddev: 0.0019673216497486535",
            "extra": "mean: 30.386199303030345 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.7006045356280022,
            "unit": "iter/sec",
            "range": "stddev: 0.013528203290780572",
            "extra": "mean: 588.0261866000012 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 130.40963635030943,
            "unit": "iter/sec",
            "range": "stddev: 0.003733075847919683",
            "extra": "mean: 7.668144992857558 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.0918914651751473,
            "unit": "iter/sec",
            "range": "stddev: 0.15815119958213333",
            "extra": "mean: 10.882403475600006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5031.895323957728,
            "unit": "iter/sec",
            "range": "stddev: 0.0000681633304597896",
            "extra": "mean: 198.73227394831255 usec\nrounds: 2829"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 250.33674092431346,
            "unit": "iter/sec",
            "range": "stddev: 0.0005374295615427649",
            "extra": "mean: 3.994619392693695 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 17439.74159676274,
            "unit": "iter/sec",
            "range": "stddev: 0.000024673484647368955",
            "extra": "mean: 57.3402991352593 usec\nrounds: 5897"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.497629018256289,
            "unit": "iter/sec",
            "range": "stddev: 0.018344847955488415",
            "extra": "mean: 400.3797172000134 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.95999059502702,
            "unit": "iter/sec",
            "range": "stddev: 0.0008267737572007037",
            "extra": "mean: 12.506254597561114 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.94858430298622,
            "unit": "iter/sec",
            "range": "stddev: 0.0010159767820417276",
            "extra": "mean: 15.885980774194488 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 214.48932088133728,
            "unit": "iter/sec",
            "range": "stddev: 0.0004788457317915344",
            "extra": "mean: 4.662236776595669 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 88.48581510588507,
            "unit": "iter/sec",
            "range": "stddev: 0.006543419541742228",
            "extra": "mean: 11.301246406594851 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.278548853573405,
            "unit": "iter/sec",
            "range": "stddev: 0.0017209803067905274",
            "extra": "mean: 25.459189027779573 msec\nrounds: 36"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "156c2bd325ce2a2049e45aa57f9a2ca929024577",
          "message": "fix: expose ops.IfNull for mysql backend",
          "timestamp": "2022-02-02T18:08:22-05:00",
          "tree_id": "55ac3f5baef0ab93a796ba357cf32caedee735f7",
          "url": "https://github.com/ibis-project/ibis/commit/156c2bd325ce2a2049e45aa57f9a2ca929024577"
        },
        "date": 1643843451222,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 41.54350916251798,
            "unit": "iter/sec",
            "range": "stddev: 0.014483087844042756",
            "extra": "mean: 24.07114902325669 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 291.2929102170189,
            "unit": "iter/sec",
            "range": "stddev: 0.00009605347939554221",
            "extra": "mean: 3.4329706111109277 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 784.0407682468032,
            "unit": "iter/sec",
            "range": "stddev: 0.000021950558880920053",
            "extra": "mean: 1.275443880598332 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 275.7524024753548,
            "unit": "iter/sec",
            "range": "stddev: 0.0001345744848627878",
            "extra": "mean: 3.626441659341025 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 384436.14333984395,
            "unit": "iter/sec",
            "range": "stddev: 3.166808181114119e-7",
            "extra": "mean: 2.601212235957725 usec\nrounds: 65790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.26968243437244,
            "unit": "iter/sec",
            "range": "stddev: 0.00013448407635746035",
            "extra": "mean: 6.1248358243237115 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.0116357746510563,
            "unit": "iter/sec",
            "range": "stddev: 0.002885416381073013",
            "extra": "mean: 332.045464600003 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 79.4264445878404,
            "unit": "iter/sec",
            "range": "stddev: 0.00032428118883424197",
            "extra": "mean: 12.590265184211615 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3518714941390964,
            "unit": "iter/sec",
            "range": "stddev: 0.005192151466782557",
            "extra": "mean: 739.7152794000021 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9201931212469056,
            "unit": "iter/sec",
            "range": "stddev: 0.01232263546298109",
            "extra": "mean: 1.0867284017999963 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 82.32115384349957,
            "unit": "iter/sec",
            "range": "stddev: 0.00004942876766533815",
            "extra": "mean: 12.147545962500672 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 240.16897311560757,
            "unit": "iter/sec",
            "range": "stddev: 0.00017855240523200784",
            "extra": "mean: 4.163735169565974 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1715993139334024,
            "unit": "iter/sec",
            "range": "stddev: 0.0038361455087618057",
            "extra": "mean: 460.4901068000004 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 180.5273840900985,
            "unit": "iter/sec",
            "range": "stddev: 0.005175502237574744",
            "extra": "mean: 5.539325820513275 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 22927.536180434752,
            "unit": "iter/sec",
            "range": "stddev: 0.000012370167280160598",
            "extra": "mean: 43.6156764569126 usec\nrounds: 6435"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 327795.7050271457,
            "unit": "iter/sec",
            "range": "stddev: 3.6781808308646417e-7",
            "extra": "mean: 3.050680605827911 usec\nrounds: 71429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.33343295561667,
            "unit": "iter/sec",
            "range": "stddev: 0.00019701755659898228",
            "extra": "mean: 6.198343280001382 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.18962982580204,
            "unit": "iter/sec",
            "range": "stddev: 0.000709037617538594",
            "extra": "mean: 10.847207021978083 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.57234380722104,
            "unit": "iter/sec",
            "range": "stddev: 0.0018427906530286147",
            "extra": "mean: 39.10474563999969 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 322232.8873082913,
            "unit": "iter/sec",
            "range": "stddev: 2.477072456385743e-7",
            "extra": "mean: 3.103345559645703 usec\nrounds: 28736"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 113.79712480322164,
            "unit": "iter/sec",
            "range": "stddev: 0.0005453444914094593",
            "extra": "mean: 8.787568242424433 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.16396999643599,
            "unit": "iter/sec",
            "range": "stddev: 0.0005025350031287866",
            "extra": "mean: 23.71693178048764 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9836.245066942796,
            "unit": "iter/sec",
            "range": "stddev: 0.000015773195036160785",
            "extra": "mean: 101.6648114391491 usec\nrounds: 4948"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6361.1867201456735,
            "unit": "iter/sec",
            "range": "stddev: 0.00003261434372223689",
            "extra": "mean: 157.2033716339488 usec\nrounds: 2785"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 69.35166933504424,
            "unit": "iter/sec",
            "range": "stddev: 0.0009829987370884661",
            "extra": "mean: 14.419263582090704 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 94.46261040302666,
            "unit": "iter/sec",
            "range": "stddev: 0.0003285955336755159",
            "extra": "mean: 10.586199086955986 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9069574781270555,
            "unit": "iter/sec",
            "range": "stddev: 0.010917269309395117",
            "extra": "mean: 1.102587523799997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14808729401554874,
            "unit": "iter/sec",
            "range": "stddev: 0.017902517816135843",
            "extra": "mean: 6.752773805799995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 27.298287948288564,
            "unit": "iter/sec",
            "range": "stddev: 0.035665128580994604",
            "extra": "mean: 36.632333935897755 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.08450331035041,
            "unit": "iter/sec",
            "range": "stddev: 0.0023337762090894594",
            "extra": "mean: 25.585588028572406 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.16545694422124,
            "unit": "iter/sec",
            "range": "stddev: 0.00120366954344689",
            "extra": "mean: 19.16977361224433 msec\nrounds: 49"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "75ccb2b218e1def08398c51f5ebc0b79b5b778c9",
          "message": "ci: add skip helpers",
          "timestamp": "2022-02-02T18:45:43-05:00",
          "tree_id": "345f23c9b809d1da7d00e3cbadfcc02a76073666",
          "url": "https://github.com/ibis-project/ibis/commit/75ccb2b218e1def08398c51f5ebc0b79b5b778c9"
        },
        "date": 1643845695213,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 96.49259631315284,
            "unit": "iter/sec",
            "range": "stddev: 0.004812042521421038",
            "extra": "mean: 10.363489409639717 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 70.37682001493702,
            "unit": "iter/sec",
            "range": "stddev: 0.0004279061500597319",
            "extra": "mean: 14.209224000001086 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 150.74777209617318,
            "unit": "iter/sec",
            "range": "stddev: 0.00025909752232681956",
            "extra": "mean: 6.633597207406991 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 272.11762365731175,
            "unit": "iter/sec",
            "range": "stddev: 0.00017985816417673015",
            "extra": "mean: 3.6748814228193423 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 33.86833532744439,
            "unit": "iter/sec",
            "range": "stddev: 0.02361760047202014",
            "extra": "mean: 29.526104260272692 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 36.8184331650219,
            "unit": "iter/sec",
            "range": "stddev: 0.01928765550740034",
            "extra": "mean: 27.160308411766312 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 76.82370111130122,
            "unit": "iter/sec",
            "range": "stddev: 0.00041150433622947095",
            "extra": "mean: 13.016816236843528 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.9068087678192076,
            "unit": "iter/sec",
            "range": "stddev: 0.0032830600513100816",
            "extra": "mean: 344.01987880002025 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13780393502055674,
            "unit": "iter/sec",
            "range": "stddev: 0.10666340745801799",
            "extra": "mean: 7.256686827200008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.61545091562222,
            "unit": "iter/sec",
            "range": "stddev: 0.001029506520379291",
            "extra": "mean: 14.573976949152746 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 340982.5164617489,
            "unit": "iter/sec",
            "range": "stddev: 7.886013786527187e-7",
            "extra": "mean: 2.932701683290495 usec\nrounds: 25188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6059.237311973643,
            "unit": "iter/sec",
            "range": "stddev: 0.0000460881330399254",
            "extra": "mean: 165.03727259929275 usec\nrounds: 2843"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8714510213364668,
            "unit": "iter/sec",
            "range": "stddev: 0.02574647905320125",
            "extra": "mean: 1.1475114211999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23226.332209188164,
            "unit": "iter/sec",
            "range": "stddev: 0.000018807113565125834",
            "extra": "mean: 43.05458093828553 usec\nrounds: 6925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 396377.5154996638,
            "unit": "iter/sec",
            "range": "stddev: 8.276445217646546e-7",
            "extra": "mean: 2.522847439364527 usec\nrounds: 74069"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.84354897946247,
            "unit": "iter/sec",
            "range": "stddev: 0.000848736053273765",
            "extra": "mean: 18.92378576595315 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 338187.5087031812,
            "unit": "iter/sec",
            "range": "stddev: 9.351746565246493e-7",
            "extra": "mean: 2.956939491451398 usec\nrounds: 83327"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 185.15844155985033,
            "unit": "iter/sec",
            "range": "stddev: 0.00035310882322497835",
            "extra": "mean: 5.400779956752669 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.7769940661381,
            "unit": "iter/sec",
            "range": "stddev: 0.00035779697218303965",
            "extra": "mean: 6.298141653843459 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8657711291486582,
            "unit": "iter/sec",
            "range": "stddev: 0.0058996984085376665",
            "extra": "mean: 1.155039670799988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.5902090883656,
            "unit": "iter/sec",
            "range": "stddev: 0.0014929237699586105",
            "extra": "mean: 39.07744546153953 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 250.88332605176964,
            "unit": "iter/sec",
            "range": "stddev: 0.0036971016436288186",
            "extra": "mean: 3.985916544304943 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.2574717446381651,
            "unit": "iter/sec",
            "range": "stddev: 0.014232490050192378",
            "extra": "mean: 795.2464970000165 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 231.74598033081898,
            "unit": "iter/sec",
            "range": "stddev: 0.00029517407479965317",
            "extra": "mean: 4.315069450492704 msec\nrounds: 202"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.79527145588352,
            "unit": "iter/sec",
            "range": "stddev: 0.0015689176102722008",
            "extra": "mean: 23.36706757499769 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 735.290083530914,
            "unit": "iter/sec",
            "range": "stddev: 0.00012084990224290914",
            "extra": "mean: 1.3600074615421585 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 91.01506072565185,
            "unit": "iter/sec",
            "range": "stddev: 0.0005158458736929102",
            "extra": "mean: 10.987192581393929 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.10496233772987,
            "unit": "iter/sec",
            "range": "stddev: 0.00053609668507239",
            "extra": "mean: 10.740566076087223 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10402.569293248574,
            "unit": "iter/sec",
            "range": "stddev: 0.000012584080745568575",
            "extra": "mean: 96.13009746053942 usec\nrounds: 5828"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.307539366326374,
            "unit": "iter/sec",
            "range": "stddev: 0.0008060674171426089",
            "extra": "mean: 23.090667690474845 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0582804454570827,
            "unit": "iter/sec",
            "range": "stddev: 0.009580770664374022",
            "extra": "mean: 485.84244300000137 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "0075d66c18fe420e045b56ff4287cdd7706a6f69",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-03T02:14:04Z",
          "tree_id": "287d1ccd390e292b739559f7740bb9f81afe0638",
          "url": "https://github.com/ibis-project/ibis/commit/0075d66c18fe420e045b56ff4287cdd7706a6f69"
        },
        "date": 1643855214819,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 179.54692698151922,
            "unit": "iter/sec",
            "range": "stddev: 0.0024900270481245865",
            "extra": "mean: 5.569574577586226 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10082239352577221,
            "unit": "iter/sec",
            "range": "stddev: 0.0921498739025947",
            "extra": "mean: 9.918431461800003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 108.18615566177164,
            "unit": "iter/sec",
            "range": "stddev: 0.0007450764685311269",
            "extra": "mean: 9.243326873785545 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.7365196780294525,
            "unit": "iter/sec",
            "range": "stddev: 0.008635069083044147",
            "extra": "mean: 365.4276664000065 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 280.70352044092294,
            "unit": "iter/sec",
            "range": "stddev: 0.000601030669656873",
            "extra": "mean: 3.562477586420084 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 35.088682492841954,
            "unit": "iter/sec",
            "range": "stddev: 0.0013056474528341077",
            "extra": "mean: 28.49921766666499 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.17469077648448,
            "unit": "iter/sec",
            "range": "stddev: 0.001629291742192025",
            "extra": "mean: 22.63739671794896 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 85.68944698516913,
            "unit": "iter/sec",
            "range": "stddev: 0.00040659848618102457",
            "extra": "mean: 11.670048473682845 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5662.906102208422,
            "unit": "iter/sec",
            "range": "stddev: 0.00006227282529036059",
            "extra": "mean: 176.5877770090554 usec\nrounds: 2601"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6461539301657877,
            "unit": "iter/sec",
            "range": "stddev: 0.04369410519063313",
            "extra": "mean: 1.547618846399996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.077748303563936,
            "unit": "iter/sec",
            "range": "stddev: 0.0014870131822735358",
            "extra": "mean: 21.70244937777599 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.1990432163671505,
            "unit": "iter/sec",
            "range": "stddev: 0.03506177117305406",
            "extra": "mean: 833.9982966000093 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 405796.82842011086,
            "unit": "iter/sec",
            "range": "stddev: 0.000002558420501867864",
            "extra": "mean: 2.464287372312152 usec\nrounds: 62894"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 346287.1772274085,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030183449773300857",
            "extra": "mean: 2.8877765789846013 usec\nrounds: 68494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 38.17227179173026,
            "unit": "iter/sec",
            "range": "stddev: 0.013865326713208379",
            "extra": "mean: 26.197026088885877 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 234.56092660670438,
            "unit": "iter/sec",
            "range": "stddev: 0.0005666421509831497",
            "extra": "mean: 4.26328465898641 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 40.007767348000044,
            "unit": "iter/sec",
            "range": "stddev: 0.015091387294756396",
            "extra": "mean: 24.995146349999686 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 74.49309173725678,
            "unit": "iter/sec",
            "range": "stddev: 0.001842072260643414",
            "extra": "mean: 13.424063583333094 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6546460032486121,
            "unit": "iter/sec",
            "range": "stddev: 0.016039948826618824",
            "extra": "mean: 1.527543122600008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8877.62858199045,
            "unit": "iter/sec",
            "range": "stddev: 0.00003870871542154287",
            "extra": "mean: 112.64269402176211 usec\nrounds: 5386"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 82.35660814108276,
            "unit": "iter/sec",
            "range": "stddev: 0.004198858506793852",
            "extra": "mean: 12.14231647674135 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 768.4325129406054,
            "unit": "iter/sec",
            "range": "stddev: 0.00013848666239758237",
            "extra": "mean: 1.3013504545418593 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.850652108361626,
            "unit": "iter/sec",
            "range": "stddev: 0.0018330942602188332",
            "extra": "mean: 37.243043333334455 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 242.39727685281656,
            "unit": "iter/sec",
            "range": "stddev: 0.00042247045320238744",
            "extra": "mean: 4.125458887094673 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18783.78590380167,
            "unit": "iter/sec",
            "range": "stddev: 0.00001952105901932125",
            "extra": "mean: 53.237404063342154 usec\nrounds: 7875"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.2023050623625,
            "unit": "iter/sec",
            "range": "stddev: 0.00044584194354998575",
            "extra": "mean: 6.242107437909376 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 145.64227573973025,
            "unit": "iter/sec",
            "range": "stddev: 0.0004733055879885896",
            "extra": "mean: 6.866138248121364 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 107.12233075427118,
            "unit": "iter/sec",
            "range": "stddev: 0.0006058697785169192",
            "extra": "mean: 9.335121752474826 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.66708052948833,
            "unit": "iter/sec",
            "range": "stddev: 0.0005284082094132333",
            "extra": "mean: 11.152364882350946 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.026082085341225,
            "unit": "iter/sec",
            "range": "stddev: 0.010923444826815133",
            "extra": "mean: 493.5634183999923 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 346850.32855010324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022185858008295565",
            "extra": "mean: 2.8830879422262043 usec\nrounds: 30031"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "773f4221ba76df14f53ea04db7dfe1f18da9cd3c",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-04T01:04:36Z",
          "tree_id": "b9f0e7c77ceea6d741653d1f7f4c1c8c4206bbed",
          "url": "https://github.com/ibis-project/ibis/commit/773f4221ba76df14f53ea04db7dfe1f18da9cd3c"
        },
        "date": 1643937614928,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 80.83111657165239,
            "unit": "iter/sec",
            "range": "stddev: 0.0004992822474451383",
            "extra": "mean: 12.371473294118788 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 375997.3311006694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016694800149948802",
            "extra": "mean: 2.659593346241759 usec\nrounds: 80646"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 46.00667473560312,
            "unit": "iter/sec",
            "range": "stddev: 0.012858665442777887",
            "extra": "mean: 21.73597648051993 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 162.38189558777512,
            "unit": "iter/sec",
            "range": "stddev: 0.00017524970969746506",
            "extra": "mean: 6.158322000000625 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 251.00850039754098,
            "unit": "iter/sec",
            "range": "stddev: 0.0019480389339736612",
            "extra": "mean: 3.983928824785714 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 236.42286024595165,
            "unit": "iter/sec",
            "range": "stddev: 0.0018030326092420936",
            "extra": "mean: 4.229709423867455 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.268358026542074,
            "unit": "iter/sec",
            "range": "stddev: 0.001361159201495143",
            "extra": "mean: 21.613042750000876 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9345.496122625875,
            "unit": "iter/sec",
            "range": "stddev: 0.000026718759807764232",
            "extra": "mean: 107.00341500104571 usec\nrounds: 400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 36.98525028218959,
            "unit": "iter/sec",
            "range": "stddev: 0.0008956252385286366",
            "extra": "mean: 27.037805405403848 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 167.580970328468,
            "unit": "iter/sec",
            "range": "stddev: 0.0004806078820701482",
            "extra": "mean: 5.9672646484857115 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 291.74203312302694,
            "unit": "iter/sec",
            "range": "stddev: 0.00029621218110120615",
            "extra": "mean: 3.4276857170536768 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 44.981093115120224,
            "unit": "iter/sec",
            "range": "stddev: 0.009281880994826215",
            "extra": "mean: 22.231562880001547 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 20220.91232650329,
            "unit": "iter/sec",
            "range": "stddev: 0.00001906225976500016",
            "extra": "mean: 49.45375282050517 usec\nrounds: 8953"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0623814914863137,
            "unit": "iter/sec",
            "range": "stddev: 0.008746405565884326",
            "extra": "mean: 484.87634519999574 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 808.4883062892167,
            "unit": "iter/sec",
            "range": "stddev: 0.00009207445188523373",
            "extra": "mean: 1.2368762692311281 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 374072.6451314024,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015067861449341114",
            "extra": "mean: 2.6732775385078607 usec\nrounds: 27398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 388489.4243024846,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033936930437501956",
            "extra": "mean: 2.57407264508025 usec\nrounds: 86957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 29.058820150843456,
            "unit": "iter/sec",
            "range": "stddev: 0.0011071197419799412",
            "extra": "mean: 34.41295946666211 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 193.20430425377324,
            "unit": "iter/sec",
            "range": "stddev: 0.0004946634120785622",
            "extra": "mean: 5.175868125000482 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.1263109907960778,
            "unit": "iter/sec",
            "range": "stddev: 0.02795127379370319",
            "extra": "mean: 887.8542499999924 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5521.691116851399,
            "unit": "iter/sec",
            "range": "stddev: 0.000055049650845894304",
            "extra": "mean: 181.10393697107492 usec\nrounds: 3189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6861195804240764,
            "unit": "iter/sec",
            "range": "stddev: 0.019625650573249682",
            "extra": "mean: 1.457471887600002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 106.5697101792381,
            "unit": "iter/sec",
            "range": "stddev: 0.004535473044278158",
            "extra": "mean: 9.383529319148133 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.673714360795635,
            "unit": "iter/sec",
            "range": "stddev: 0.03136415764280634",
            "extra": "mean: 1.4843085707999932 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 52.9498805507081,
            "unit": "iter/sec",
            "range": "stddev: 0.0008498669231599669",
            "extra": "mean: 18.885783869565817 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 111.52242647223702,
            "unit": "iter/sec",
            "range": "stddev: 0.00035752711386256766",
            "extra": "mean: 8.966806333333729 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 87.62419258246635,
            "unit": "iter/sec",
            "range": "stddev: 0.00044756079034012365",
            "extra": "mean: 11.412373347222152 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 85.88472859655657,
            "unit": "iter/sec",
            "range": "stddev: 0.0005371145435862677",
            "extra": "mean: 11.643513536585754 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.869712893265951,
            "unit": "iter/sec",
            "range": "stddev: 0.013529694115778696",
            "extra": "mean: 348.46691540000165 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1060349141521076,
            "unit": "iter/sec",
            "range": "stddev: 0.04912111091284813",
            "extra": "mean: 9.43085594019999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.48840389923537,
            "unit": "iter/sec",
            "range": "stddev: 0.0005616706106506974",
            "extra": "mean: 10.696513773813384 msec\nrounds: 84"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "ac80436eedf9a2eac169f8be71605ea30a2855f1",
          "message": "docs: add better comparison section",
          "timestamp": "2022-02-04T14:01:01-05:00",
          "tree_id": "12be3645246dbac2b814ad4f3f14b1928772efe3",
          "url": "https://github.com/ibis-project/ibis/commit/ac80436eedf9a2eac169f8be71605ea30a2855f1"
        },
        "date": 1644001412198,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 390665.6977039596,
            "unit": "iter/sec",
            "range": "stddev: 2.801994662918195e-7",
            "extra": "mean: 2.559733311312591 usec\nrounds: 30395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.570805208625764,
            "unit": "iter/sec",
            "range": "stddev: 0.00037105777733729614",
            "extra": "mean: 22.951148027028633 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 325924.0038035687,
            "unit": "iter/sec",
            "range": "stddev: 2.4360724750105325e-7",
            "extra": "mean: 3.0681999126480126 usec\nrounds: 27397"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.43619732100129,
            "unit": "iter/sec",
            "range": "stddev: 0.00024619940224865025",
            "extra": "mean: 10.478204581396751 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.125371955235437,
            "unit": "iter/sec",
            "range": "stddev: 0.0012923117656902076",
            "extra": "mean: 470.50587900000096 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10003.571705332946,
            "unit": "iter/sec",
            "range": "stddev: 0.000004780699964932946",
            "extra": "mean: 99.9642956991947 usec\nrounds: 372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9187631235607706,
            "unit": "iter/sec",
            "range": "stddev: 0.006601831086772681",
            "extra": "mean: 1.088419827000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 165.14327282075382,
            "unit": "iter/sec",
            "range": "stddev: 0.000089929615589619",
            "extra": "mean: 6.05534807999959 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 43.04709976657899,
            "unit": "iter/sec",
            "range": "stddev: 0.014426305296079344",
            "extra": "mean: 23.23036872222417 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 240.48114092506685,
            "unit": "iter/sec",
            "range": "stddev: 0.0001517346150964834",
            "extra": "mean: 4.158330238093792 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 82.97555851769614,
            "unit": "iter/sec",
            "range": "stddev: 0.0001859798336933155",
            "extra": "mean: 12.05174171604679 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6289.85784336068,
            "unit": "iter/sec",
            "range": "stddev: 0.00003588285030191289",
            "extra": "mean: 158.98610507637463 usec\nrounds: 2817"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.91690833703756,
            "unit": "iter/sec",
            "range": "stddev: 0.008771889841465095",
            "extra": "mean: 1.0906215589999988 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 72.61148039532188,
            "unit": "iter/sec",
            "range": "stddev: 0.000629757615226018",
            "extra": "mean: 13.771926898551799 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 335926.89968902816,
            "unit": "iter/sec",
            "range": "stddev: 2.0428913713791232e-7",
            "extra": "mean: 2.976838118429077 usec\nrounds: 78125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.329323807015374,
            "unit": "iter/sec",
            "range": "stddev: 0.0011599575561654595",
            "extra": "mean: 752.2621612000023 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.1939231456621,
            "unit": "iter/sec",
            "range": "stddev: 0.00026834130978520634",
            "extra": "mean: 17.484375000001123 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23071.46249017589,
            "unit": "iter/sec",
            "range": "stddev: 0.000014294526914041918",
            "extra": "mean: 43.34358952865741 usec\nrounds: 6685"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 293.51450674305937,
            "unit": "iter/sec",
            "range": "stddev: 0.00008763086808069931",
            "extra": "mean: 3.4069866293709063 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 164.3429336692554,
            "unit": "iter/sec",
            "range": "stddev: 0.00005232544008385356",
            "extra": "mean: 6.0848372222229345 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 41.250763861014875,
            "unit": "iter/sec",
            "range": "stddev: 0.020794276626912394",
            "extra": "mean: 24.241975333336224 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.056393547424953,
            "unit": "iter/sec",
            "range": "stddev: 0.0008449536773344211",
            "extra": "mean: 35.64249975000016 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.798912750274695,
            "unit": "iter/sec",
            "range": "stddev: 0.0010322918669509549",
            "extra": "mean: 21.368017785715125 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.089059325677787,
            "unit": "iter/sec",
            "range": "stddev: 0.0010608888067877129",
            "extra": "mean: 323.72314500000243 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1503729405448707,
            "unit": "iter/sec",
            "range": "stddev: 0.041894648152071",
            "extra": "mean: 6.650132639399999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 275.7840838481945,
            "unit": "iter/sec",
            "range": "stddev: 0.00014238840332402017",
            "extra": "mean: 3.62602506296357 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 105.01210056398455,
            "unit": "iter/sec",
            "range": "stddev: 0.005824130600894468",
            "extra": "mean: 9.522712093457207 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 77.51535211434701,
            "unit": "iter/sec",
            "range": "stddev: 0.0001608172993655098",
            "extra": "mean: 12.900670289478231 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 187.5661839620035,
            "unit": "iter/sec",
            "range": "stddev: 0.0037882930795828692",
            "extra": "mean: 5.33145143157882 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.019047507019,
            "unit": "iter/sec",
            "range": "stddev: 0.00034814607694756656",
            "extra": "mean: 11.23355088607471 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 792.6583335736999,
            "unit": "iter/sec",
            "range": "stddev: 0.0000238864755594777",
            "extra": "mean: 1.2615776024097296 msec\nrounds: 83"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "713cf8230fce1fef907bbfa18b937190aaf85790",
          "message": "refactor: split ibis/expr.types.py into separate files",
          "timestamp": "2022-02-04T15:34:10-05:00",
          "tree_id": "db4cb2fc15bad31b83e22714185a7bfe3ac00460",
          "url": "https://github.com/ibis-project/ibis/commit/713cf8230fce1fef907bbfa18b937190aaf85790"
        },
        "date": 1644007050613,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 282648.6457890528,
            "unit": "iter/sec",
            "range": "stddev: 0.000014439369799661144",
            "extra": "mean: 3.5379614050807198 usec\nrounds: 13551"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 205.84769065727951,
            "unit": "iter/sec",
            "range": "stddev: 0.002413052775213949",
            "extra": "mean: 4.857960741784189 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.66104533810868,
            "unit": "iter/sec",
            "range": "stddev: 0.0013800805116106715",
            "extra": "mean: 15.465261886365443 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09030318886171472,
            "unit": "iter/sec",
            "range": "stddev: 0.15779029619362553",
            "extra": "mean: 11.07380605940001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 33.53704430737885,
            "unit": "iter/sec",
            "range": "stddev: 0.018902111942325793",
            "extra": "mean: 29.817773767856437 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 222.8018086720644,
            "unit": "iter/sec",
            "range": "stddev: 0.00044764184089881253",
            "extra": "mean: 4.48829390551255 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.275293743050213,
            "unit": "iter/sec",
            "range": "stddev: 0.022359839773427256",
            "extra": "mean: 439.503691799996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 144.0105258792998,
            "unit": "iter/sec",
            "range": "stddev: 0.0006954052007667856",
            "extra": "mean: 6.943936867768503 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.43318568624063,
            "unit": "iter/sec",
            "range": "stddev: 0.0049144161472673056",
            "extra": "mean: 11.437304864866316 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 90.8658268083042,
            "unit": "iter/sec",
            "range": "stddev: 0.0012242086373406458",
            "extra": "mean: 11.005237448723793 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.136356291779368,
            "unit": "iter/sec",
            "range": "stddev: 0.00308412348996069",
            "extra": "mean: 43.22201765000102 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6062893514634786,
            "unit": "iter/sec",
            "range": "stddev: 0.014363425881905091",
            "extra": "mean: 1.6493774756000108 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 35.20874934323139,
            "unit": "iter/sec",
            "range": "stddev: 0.014812724335846319",
            "extra": "mean: 28.40203127499734 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.25987129907285,
            "unit": "iter/sec",
            "range": "stddev: 0.0032182570438157067",
            "extra": "mean: 28.36085224242707 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 57.027258235135925,
            "unit": "iter/sec",
            "range": "stddev: 0.0009300967558503675",
            "extra": "mean: 17.53547392856904 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 618.8943493707111,
            "unit": "iter/sec",
            "range": "stddev: 0.0002764515407242802",
            "extra": "mean: 1.6157846666669287 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.11507612456711,
            "unit": "iter/sec",
            "range": "stddev: 0.0029094141536473526",
            "extra": "mean: 24.928283742869034 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 74.96737082670968,
            "unit": "iter/sec",
            "range": "stddev: 0.001525182181026568",
            "extra": "mean: 13.339136599995527 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4627.57764865539,
            "unit": "iter/sec",
            "range": "stddev: 0.00010641040646028843",
            "extra": "mean: 216.09577967655815 usec\nrounds: 2165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8295.214508535188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000568385587730725",
            "extra": "mean: 120.55143347662327 usec\nrounds: 3029"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 209.93591556226937,
            "unit": "iter/sec",
            "range": "stddev: 0.0006865085941759037",
            "extra": "mean: 4.7633583673460995 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16683.942436157937,
            "unit": "iter/sec",
            "range": "stddev: 0.00004129320870405243",
            "extra": "mean: 59.93787162875665 usec\nrounds: 6785"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5967879531260938,
            "unit": "iter/sec",
            "range": "stddev: 0.019928479593092754",
            "extra": "mean: 1.6756370411999797 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 159.91508384434715,
            "unit": "iter/sec",
            "range": "stddev: 0.0006712149261426596",
            "extra": "mean: 6.25331879870286 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 71.11134057912723,
            "unit": "iter/sec",
            "range": "stddev: 0.0013145239614109215",
            "extra": "mean: 14.062454621949882 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.7423038300114533,
            "unit": "iter/sec",
            "range": "stddev: 0.005078136822246221",
            "extra": "mean: 573.9527071999987 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.416543482230445,
            "unit": "iter/sec",
            "range": "stddev: 0.0015267726719397964",
            "extra": "mean: 31.83036353332795 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 259316.12075178392,
            "unit": "iter/sec",
            "range": "stddev: 0.000009159815396260298",
            "extra": "mean: 3.856297082884388 usec\nrounds: 22832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 120.02883630025106,
            "unit": "iter/sec",
            "range": "stddev: 0.000766024203568157",
            "extra": "mean: 8.331331293577728 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 257070.0471359811,
            "unit": "iter/sec",
            "range": "stddev: 0.000008798555337868701",
            "extra": "mean: 3.8899903397576105 usec\nrounds: 71943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.0054898060218878,
            "unit": "iter/sec",
            "range": "stddev: 0.013857947887358519",
            "extra": "mean: 994.5401673999982 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "66d9100a3f74d25bd2de6df98e029e8093cd5d22",
          "message": "chore(conda-lock): relock",
          "timestamp": "2022-02-04T18:41:31-05:00",
          "tree_id": "15243b73ed3dd70e976efc02a528b7b1a123514a",
          "url": "https://github.com/ibis-project/ibis/commit/66d9100a3f74d25bd2de6df98e029e8093cd5d22"
        },
        "date": 1644019196210,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 862.3206480810659,
            "unit": "iter/sec",
            "range": "stddev: 0.000015046170513390357",
            "extra": "mean: 1.1596614347868324 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.420273574558579,
            "unit": "iter/sec",
            "range": "stddev: 0.0012831168283926192",
            "extra": "mean: 413.1764320000002 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.7921121729304,
            "unit": "iter/sec",
            "range": "stddev: 0.0004708383676577053",
            "extra": "mean: 16.44950248077219 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.35490249607661,
            "unit": "iter/sec",
            "range": "stddev: 0.000587629795928125",
            "extra": "mean: 20.680426355551795 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 179.357928550065,
            "unit": "iter/sec",
            "range": "stddev: 0.00009189836343932981",
            "extra": "mean: 5.575443517239693 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 329.9577505312856,
            "unit": "iter/sec",
            "range": "stddev: 0.00008676893425274566",
            "extra": "mean: 3.030691045716724 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11734.843446764045,
            "unit": "iter/sec",
            "range": "stddev: 0.000017429021582942446",
            "extra": "mean: 85.21630514600142 usec\nrounds: 6102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 48.108163473264625,
            "unit": "iter/sec",
            "range": "stddev: 0.0011831442964180163",
            "extra": "mean: 20.786492931822988 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 435839.4437274763,
            "unit": "iter/sec",
            "range": "stddev: 7.263113667731673e-7",
            "extra": "mean: 2.2944228990556543 usec\nrounds: 84746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 114.2562536753223,
            "unit": "iter/sec",
            "range": "stddev: 0.005072341736520357",
            "extra": "mean: 8.75225615957672 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.4906402316758256,
            "unit": "iter/sec",
            "range": "stddev: 0.0022403047590361376",
            "extra": "mean: 670.8526838000125 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 76.88453824445783,
            "unit": "iter/sec",
            "range": "stddev: 0.0005424354972626949",
            "extra": "mean: 13.006516301372002 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16171092358491343,
            "unit": "iter/sec",
            "range": "stddev: 0.011716861191230415",
            "extra": "mean: 6.1838741491999825 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 26464.462043011907,
            "unit": "iter/sec",
            "range": "stddev: 0.000014183959683400852",
            "extra": "mean: 37.78652286128959 usec\nrounds: 5774"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 32.354442505212226,
            "unit": "iter/sec",
            "range": "stddev: 0.028157707732202032",
            "extra": "mean: 30.907656648353694 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 372182.54743054096,
            "unit": "iter/sec",
            "range": "stddev: 2.733383711451526e-7",
            "extra": "mean: 2.68685355319254 usec\nrounds: 83334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 265.67586820612604,
            "unit": "iter/sec",
            "range": "stddev: 0.00008783663018263678",
            "extra": "mean: 3.7639850647788027 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.956028764627122,
            "unit": "iter/sec",
            "range": "stddev: 0.017453527807148806",
            "extra": "mean: 1.0459936321999976 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 7215.278399497491,
            "unit": "iter/sec",
            "range": "stddev: 0.00002953399431567845",
            "extra": "mean: 138.59479075258483 usec\nrounds: 2963"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 38.51670826627057,
            "unit": "iter/sec",
            "range": "stddev: 0.022169761049145937",
            "extra": "mean: 25.962758631575717 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.14062728066162,
            "unit": "iter/sec",
            "range": "stddev: 0.0007362889557614029",
            "extra": "mean: 10.736453352270107 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 106.95040031762214,
            "unit": "iter/sec",
            "range": "stddev: 0.0003618931730391769",
            "extra": "mean: 9.350128630002246 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 87.60285085706961,
            "unit": "iter/sec",
            "range": "stddev: 0.00024246248241170613",
            "extra": "mean: 11.415153619047995 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9464527821031268,
            "unit": "iter/sec",
            "range": "stddev: 0.004584621849198641",
            "extra": "mean: 1.0565767451999932 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 375296.68617188296,
            "unit": "iter/sec",
            "range": "stddev: 1.9179727993650214e-7",
            "extra": "mean: 2.664558566184642 usec\nrounds: 28011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.999157023506104,
            "unit": "iter/sec",
            "range": "stddev: 0.0005834624888069246",
            "extra": "mean: 34.483760999998076 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 214.76891840846392,
            "unit": "iter/sec",
            "range": "stddev: 0.00010588077142201025",
            "extra": "mean: 4.656167230390961 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.423063319875885,
            "unit": "iter/sec",
            "range": "stddev: 0.002660822495927788",
            "extra": "mean: 292.13599240000576 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 92.56131684392409,
            "unit": "iter/sec",
            "range": "stddev: 0.00006864197680666608",
            "extra": "mean: 10.80364923595663 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 315.2444487388303,
            "unit": "iter/sec",
            "range": "stddev: 0.00011430137382071816",
            "extra": "mean: 3.172141504792896 msec\nrounds: 313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 174.73354465501654,
            "unit": "iter/sec",
            "range": "stddev: 0.0003200693579590966",
            "extra": "mean: 5.722999564704878 msec\nrounds: 170"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "5dd8f563e03a7ace31515a9273ce844b5bc16eee",
          "message": "chore(deps/poetry2nix): update",
          "timestamp": "2022-02-05T02:58:24Z",
          "tree_id": "7ed7465b4918abd584f2c64ec15da6365259dc15",
          "url": "https://github.com/ibis-project/ibis/commit/5dd8f563e03a7ace31515a9273ce844b5bc16eee"
        },
        "date": 1644030146871,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 325992.5082264493,
            "unit": "iter/sec",
            "range": "stddev: 1.8977800160701155e-7",
            "extra": "mean: 3.06755515775643 usec\nrounds: 12854"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9323104218796674,
            "unit": "iter/sec",
            "range": "stddev: 0.0031793832041292387",
            "extra": "mean: 1.072604120400007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 42.358207573295985,
            "unit": "iter/sec",
            "range": "stddev: 0.01776497807373635",
            "extra": "mean: 23.608175541177363 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9951.034258860142,
            "unit": "iter/sec",
            "range": "stddev: 0.000003125101767156293",
            "extra": "mean: 100.49206685321438 usec\nrounds: 359"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.935054783192015,
            "unit": "iter/sec",
            "range": "stddev: 0.00039352554750784075",
            "extra": "mean: 18.203313056601537 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 78.95542143661172,
            "unit": "iter/sec",
            "range": "stddev: 0.00034009525026568757",
            "extra": "mean: 12.665374736842313 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 780.4039434662684,
            "unit": "iter/sec",
            "range": "stddev: 0.000015300567819147352",
            "extra": "mean: 1.28138768181817 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9205408290707767,
            "unit": "iter/sec",
            "range": "stddev: 0.011825512396416505",
            "extra": "mean: 1.0863179214000014 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.65144707332066,
            "unit": "iter/sec",
            "range": "stddev: 0.0007085899169461494",
            "extra": "mean: 20.985721555555557 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.1342447939098674,
            "unit": "iter/sec",
            "range": "stddev: 0.0010081757210442356",
            "extra": "mean: 319.0561253999988 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 156.95831041967747,
            "unit": "iter/sec",
            "range": "stddev: 0.00027492893916295343",
            "extra": "mean: 6.371118530303907 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 193.26043216996933,
            "unit": "iter/sec",
            "range": "stddev: 0.00008432232873318065",
            "extra": "mean: 5.174364916666008 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 280.53538271801347,
            "unit": "iter/sec",
            "range": "stddev: 0.00012093607005026323",
            "extra": "mean: 3.564612742647058 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 82.490251768626,
            "unit": "iter/sec",
            "range": "stddev: 0.00008287705004730031",
            "extra": "mean: 12.122644537500804 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 105.60112533612563,
            "unit": "iter/sec",
            "range": "stddev: 0.004673812082105746",
            "extra": "mean: 9.46959605607446 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 22596.99641744395,
            "unit": "iter/sec",
            "range": "stddev: 0.000014770971111097394",
            "extra": "mean: 44.25366900656059 usec\nrounds: 7408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 333742.476942674,
            "unit": "iter/sec",
            "range": "stddev: 2.1011129177917954e-7",
            "extra": "mean: 2.9963222217343555 usec\nrounds: 84746"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 38.25658575646444,
            "unit": "iter/sec",
            "range": "stddev: 0.018043779590065794",
            "extra": "mean: 26.139290274512387 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.48971208105425,
            "unit": "iter/sec",
            "range": "stddev: 0.00005794879000778774",
            "extra": "mean: 6.11659282575667 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.504049379931256,
            "unit": "iter/sec",
            "range": "stddev: 0.0015754039976240868",
            "extra": "mean: 36.358282600003804 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6234.578054911475,
            "unit": "iter/sec",
            "range": "stddev: 0.00003353709286506649",
            "extra": "mean: 160.39577838186182 usec\nrounds: 2942"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.82298217721466,
            "unit": "iter/sec",
            "range": "stddev: 0.0001713057262069567",
            "extra": "mean: 10.22254666279152 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 75.81000826303891,
            "unit": "iter/sec",
            "range": "stddev: 0.00032214026377598283",
            "extra": "mean: 13.190870478872496 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 294.5249401499957,
            "unit": "iter/sec",
            "range": "stddev: 0.00001259710461644723",
            "extra": "mean: 3.3952982028982666 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3566737864834617,
            "unit": "iter/sec",
            "range": "stddev: 0.0022385534287296836",
            "extra": "mean: 737.0968688000005 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 381017.4473509327,
            "unit": "iter/sec",
            "range": "stddev: 1.8958983193387774e-7",
            "extra": "mean: 2.624551728411951 usec\nrounds: 71943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.29929007260631,
            "unit": "iter/sec",
            "range": "stddev: 0.00012013352954283449",
            "extra": "mean: 9.871737494737127 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 235.71610788771673,
            "unit": "iter/sec",
            "range": "stddev: 0.00009507082949149238",
            "extra": "mean: 4.242391446902515 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14877411181613645,
            "unit": "iter/sec",
            "range": "stddev: 0.032267856172087675",
            "extra": "mean: 6.721599529599996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.164480144899012,
            "unit": "iter/sec",
            "range": "stddev: 0.0017493203224443893",
            "extra": "mean: 462.0046999999886 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.042301257529836,
            "unit": "iter/sec",
            "range": "stddev: 0.00034154441942610495",
            "extra": "mean: 21.719157659098506 msec\nrounds: 44"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "2011e567df587d81bff6f041aa2c973d35e9914a",
          "message": "chore: fix setup.py gen",
          "timestamp": "2022-02-04T22:20:27-05:00",
          "tree_id": "471f4078b455b3dea6da067826487b4fc7ca63c2",
          "url": "https://github.com/ibis-project/ibis/commit/2011e567df587d81bff6f041aa2c973d35e9914a"
        },
        "date": 1644031608819,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 145.21383363078533,
            "unit": "iter/sec",
            "range": "stddev: 0.00036650461646926347",
            "extra": "mean: 6.886396254385505 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 216.95458020491654,
            "unit": "iter/sec",
            "range": "stddev: 0.0007794626819515423",
            "extra": "mean: 4.609259684932609 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 202.51445556949778,
            "unit": "iter/sec",
            "range": "stddev: 0.00043479786417549446",
            "extra": "mean: 4.937919108973559 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 73.77191304238562,
            "unit": "iter/sec",
            "range": "stddev: 0.0008382352977123993",
            "extra": "mean: 13.55529440351439 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 148.74265129168273,
            "unit": "iter/sec",
            "range": "stddev: 0.0004757910778761238",
            "extra": "mean: 6.723021213592669 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.358598497724252,
            "unit": "iter/sec",
            "range": "stddev: 0.004161076213009293",
            "extra": "mean: 32.9395970000052 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 124.1582271736749,
            "unit": "iter/sec",
            "range": "stddev: 0.0002977199481589976",
            "extra": "mean: 8.05423871429141 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 43.614409321476785,
            "unit": "iter/sec",
            "range": "stddev: 0.003076959468453289",
            "extra": "mean: 22.928202297298473 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.81898340554783,
            "unit": "iter/sec",
            "range": "stddev: 0.024899582027296797",
            "extra": "mean: 53.1378331363638 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16455.561253133495,
            "unit": "iter/sec",
            "range": "stddev: 0.00005365514411709285",
            "extra": "mean: 60.76972912787027 usec\nrounds: 5342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.646301954479613,
            "unit": "iter/sec",
            "range": "stddev: 0.057809125350187",
            "extra": "mean: 1.5472643909999875 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 577.3038451422963,
            "unit": "iter/sec",
            "range": "stddev: 0.0002542301840844702",
            "extra": "mean: 1.732190090910473 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.727439379790354,
            "unit": "iter/sec",
            "range": "stddev: 0.005116806051024335",
            "extra": "mean: 18.272369607142227 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.361295004830667,
            "unit": "iter/sec",
            "range": "stddev: 0.023458480995909813",
            "extra": "mean: 423.4964279999872 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.7432973581144227,
            "unit": "iter/sec",
            "range": "stddev: 0.018018800107494973",
            "extra": "mean: 573.6256040000058 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.43135351008468,
            "unit": "iter/sec",
            "range": "stddev: 0.0012782176547646497",
            "extra": "mean: 11.569875506847426 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 310983.1798117202,
            "unit": "iter/sec",
            "range": "stddev: 0.000003551969323984237",
            "extra": "mean: 3.2156079972088327 usec\nrounds: 28010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 90.34293424155858,
            "unit": "iter/sec",
            "range": "stddev: 0.005511140223897322",
            "extra": "mean: 11.068934260273238 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 257.6192411454986,
            "unit": "iter/sec",
            "range": "stddev: 0.0002946860287992231",
            "extra": "mean: 3.8816976385518442 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 358992.7293517576,
            "unit": "iter/sec",
            "range": "stddev: 0.000004410935825980163",
            "extra": "mean: 2.7855717351315876 usec\nrounds: 69931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 302561.9601080717,
            "unit": "iter/sec",
            "range": "stddev: 0.000004280000844429155",
            "extra": "mean: 3.3051081492293726 usec\nrounds: 81295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.95721861678437,
            "unit": "iter/sec",
            "range": "stddev: 0.0016202666853584184",
            "extra": "mean: 16.678558863637164 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.848998765621985,
            "unit": "iter/sec",
            "range": "stddev: 0.0015777218643381191",
            "extra": "mean: 28.695228999993105 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 30.111597434378986,
            "unit": "iter/sec",
            "range": "stddev: 0.025720421998696282",
            "extra": "mean: 33.20979573333034 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6461266103148297,
            "unit": "iter/sec",
            "range": "stddev: 0.06918508935373587",
            "extra": "mean: 1.5476842835999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7191.773804821223,
            "unit": "iter/sec",
            "range": "stddev: 0.00005040076940479027",
            "extra": "mean: 139.04775471798345 usec\nrounds: 2067"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.0971251831303144,
            "unit": "iter/sec",
            "range": "stddev: 0.35123858756816645",
            "extra": "mean: 10.295990882800027 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 25.359411346320776,
            "unit": "iter/sec",
            "range": "stddev: 0.03422655086989133",
            "extra": "mean: 39.433091972976065 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3987.9659803228637,
            "unit": "iter/sec",
            "range": "stddev: 0.00013163866622102442",
            "extra": "mean: 250.75439583339687 usec\nrounds: 2880"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 61.731942375801886,
            "unit": "iter/sec",
            "range": "stddev: 0.010702594557130986",
            "extra": "mean: 16.199069096390314 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8863694459029482,
            "unit": "iter/sec",
            "range": "stddev: 0.08062161563057517",
            "extra": "mean: 1.1281977336000069 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "507bb14efdcfd719a0487ee23fe1c85c177517f6",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-05T05:28:45Z",
          "tree_id": "19fb857cd17b9a5bed5165669cbb264fd0e63bc5",
          "url": "https://github.com/ibis-project/ibis/commit/507bb14efdcfd719a0487ee23fe1c85c177517f6"
        },
        "date": 1644039102551,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 227.74070021774207,
            "unit": "iter/sec",
            "range": "stddev: 0.0007657817019557638",
            "extra": "mean: 4.390958660634237 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.493789341431494,
            "unit": "iter/sec",
            "range": "stddev: 0.001815071125517988",
            "extra": "mean: 21.055384585361857 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 15882.22603037901,
            "unit": "iter/sec",
            "range": "stddev: 0.00047595651689269903",
            "extra": "mean: 62.96346608386206 usec\nrounds: 5838"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.687560329534199,
            "unit": "iter/sec",
            "range": "stddev: 0.01208678395306007",
            "extra": "mean: 1.4544178264000038 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6556541537045288,
            "unit": "iter/sec",
            "range": "stddev: 0.012452350329537069",
            "extra": "mean: 603.9908744000059 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.30261699124095,
            "unit": "iter/sec",
            "range": "stddev: 0.002211487944085732",
            "extra": "mean: 29.15229471428802 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.12620242745857,
            "unit": "iter/sec",
            "range": "stddev: 0.0018190602769306422",
            "extra": "mean: 14.678640000003076 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 157.66982912927517,
            "unit": "iter/sec",
            "range": "stddev: 0.0008411396548798965",
            "extra": "mean: 6.342367499999568 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10266997853117873,
            "unit": "iter/sec",
            "range": "stddev: 0.08720201603911246",
            "extra": "mean: 9.739945545000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 37.01984385610402,
            "unit": "iter/sec",
            "range": "stddev: 0.014963441245450666",
            "extra": "mean: 27.012539650004896 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.828445586902234,
            "unit": "iter/sec",
            "range": "stddev: 0.0029956307793466736",
            "extra": "mean: 26.435133257133916 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.26509925258226,
            "unit": "iter/sec",
            "range": "stddev: 0.0009022434161602014",
            "extra": "mean: 10.608380067797004 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.0867435826028198,
            "unit": "iter/sec",
            "range": "stddev: 0.01044051234058752",
            "extra": "mean: 920.1802670000006 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6819203993303145,
            "unit": "iter/sec",
            "range": "stddev: 0.01775526555063934",
            "extra": "mean: 1.4664468184000043 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 72.55688346148582,
            "unit": "iter/sec",
            "range": "stddev: 0.0013395296751047853",
            "extra": "mean: 13.78228987096467 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 350030.30625841924,
            "unit": "iter/sec",
            "range": "stddev: 0.000006479401259929228",
            "extra": "mean: 2.8568954805351146 usec\nrounds: 82645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 125.34033247415275,
            "unit": "iter/sec",
            "range": "stddev: 0.0010092423396678204",
            "extra": "mean: 7.97827786364151 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 32.16269021681752,
            "unit": "iter/sec",
            "range": "stddev: 0.023463537633752064",
            "extra": "mean: 31.091926491805424 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.49232308145326,
            "unit": "iter/sec",
            "range": "stddev: 0.0014516384657745531",
            "extra": "mean: 15.268965169494644 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.275776026239285,
            "unit": "iter/sec",
            "range": "stddev: 0.002742204043444697",
            "extra": "mean: 42.963121782606876 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.67384390618648,
            "unit": "iter/sec",
            "range": "stddev: 0.000848248733144847",
            "extra": "mean: 11.810022479999134 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.4662055167501955,
            "unit": "iter/sec",
            "range": "stddev: 0.0024096985263999064",
            "extra": "mean: 405.4812112000036 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 303746.09369392495,
            "unit": "iter/sec",
            "range": "stddev: 0.00001123998261448431",
            "extra": "mean: 3.292223408830625 usec\nrounds: 70418"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 90.1905567729021,
            "unit": "iter/sec",
            "range": "stddev: 0.0012485024389274793",
            "extra": "mean: 11.087635288891482 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 205.31403145472174,
            "unit": "iter/sec",
            "range": "stddev: 0.00039735332400062876",
            "extra": "mean: 4.870587718309607 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4930.856264876815,
            "unit": "iter/sec",
            "range": "stddev: 0.00008723975846322682",
            "extra": "mean: 202.8045325764495 usec\nrounds: 2732"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 315065.8884261303,
            "unit": "iter/sec",
            "range": "stddev: 0.000010259869044778126",
            "extra": "mean: 3.1739392829714665 usec\nrounds: 27027"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 251.0626693159832,
            "unit": "iter/sec",
            "range": "stddev: 0.00031724654590635195",
            "extra": "mean: 3.9830692580640776 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 134.01318314858491,
            "unit": "iter/sec",
            "range": "stddev: 0.0010200876950558428",
            "extra": "mean: 7.461952447553362 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 653.0746089919069,
            "unit": "iter/sec",
            "range": "stddev: 0.0005314071765000092",
            "extra": "mean: 1.5312186176455564 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8372.444441818961,
            "unit": "iter/sec",
            "range": "stddev: 0.00004872076309449574",
            "extra": "mean: 119.43943097492138 usec\nrounds: 4636"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "bdcbb083a112d3cc81bb98ee63a26674b5397563",
          "message": "fix: remove passing schema into register_parquet",
          "timestamp": "2022-02-05T12:44:44-05:00",
          "tree_id": "39a578ec6e8547977656ada149daa25111000e7f",
          "url": "https://github.com/ibis-project/ibis/commit/bdcbb083a112d3cc81bb98ee63a26674b5397563"
        },
        "date": 1644083690715,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 81.30520948079747,
            "unit": "iter/sec",
            "range": "stddev: 0.00009139024248593616",
            "extra": "mean: 12.299334893616852 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.165506597708282,
            "unit": "iter/sec",
            "range": "stddev: 0.0029592180704934965",
            "extra": "mean: 461.78570920000084 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.56870924697657,
            "unit": "iter/sec",
            "range": "stddev: 0.00006399579726027063",
            "extra": "mean: 9.845551916667361 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.20935487443185,
            "unit": "iter/sec",
            "range": "stddev: 0.0003914882862323625",
            "extra": "mean: 21.182242431819176 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 82.25571785000861,
            "unit": "iter/sec",
            "range": "stddev: 0.0000894573661805527",
            "extra": "mean: 12.157209567163182 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 44.26428886904346,
            "unit": "iter/sec",
            "range": "stddev: 0.009335732324918147",
            "extra": "mean: 22.591574959184694 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6429.587855226512,
            "unit": "iter/sec",
            "range": "stddev: 0.00003504418309665988",
            "extra": "mean: 155.5309644283211 usec\nrounds: 2755"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 53.423149643161246,
            "unit": "iter/sec",
            "range": "stddev: 0.00018803854743947536",
            "extra": "mean: 18.71847704000004 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 359911.8355612801,
            "unit": "iter/sec",
            "range": "stddev: 1.9075162282050548e-7",
            "extra": "mean: 2.778458225583237 usec\nrounds: 74627"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.36910065386573,
            "unit": "iter/sec",
            "range": "stddev: 0.00006930726171840183",
            "extra": "mean: 6.314363066224752 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 190.6019421792682,
            "unit": "iter/sec",
            "range": "stddev: 0.0002502765940870997",
            "extra": "mean: 5.246536255435754 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15181800425316885,
            "unit": "iter/sec",
            "range": "stddev: 0.04541546032271511",
            "extra": "mean: 6.586834051200006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 273.9643437212549,
            "unit": "iter/sec",
            "range": "stddev: 0.00011075259385254406",
            "extra": "mean: 3.650110034090605 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 794.5953099924684,
            "unit": "iter/sec",
            "range": "stddev: 0.000014315963634298734",
            "extra": "mean: 1.2585022682923694 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9322390324256463,
            "unit": "iter/sec",
            "range": "stddev: 0.0027869472058065447",
            "extra": "mean: 1.0726862588000017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.177785184728959,
            "unit": "iter/sec",
            "range": "stddev: 0.00234954309632528",
            "extra": "mean: 314.68458120000093 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 60.90026522226594,
            "unit": "iter/sec",
            "range": "stddev: 0.00005931948523000779",
            "extra": "mean: 16.42028973683988 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 165.56313441831477,
            "unit": "iter/sec",
            "range": "stddev: 0.000020793530158150696",
            "extra": "mean: 6.039991955415522 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 111.34315440727887,
            "unit": "iter/sec",
            "range": "stddev: 0.0004996272086006134",
            "extra": "mean: 8.981243663549616 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 281.68188846523117,
            "unit": "iter/sec",
            "range": "stddev: 0.0001330318077774338",
            "extra": "mean: 3.5501040036638103 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 30.369721354299976,
            "unit": "iter/sec",
            "range": "stddev: 0.00029368679348468777",
            "extra": "mean: 32.927532931032715 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 44.7145703028783,
            "unit": "iter/sec",
            "range": "stddev: 0.015670423188182982",
            "extra": "mean: 22.364074913980097 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 327457.85763093893,
            "unit": "iter/sec",
            "range": "stddev: 1.5541511391583876e-7",
            "extra": "mean: 3.053828078015001 usec\nrounds: 29240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3521582276541155,
            "unit": "iter/sec",
            "range": "stddev: 0.0028957081148489766",
            "extra": "mean: 739.558418200005 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9577.584496876263,
            "unit": "iter/sec",
            "range": "stddev: 0.000016499307322790753",
            "extra": "mean: 104.41045968596266 usec\nrounds: 5606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9363944684028714,
            "unit": "iter/sec",
            "range": "stddev: 0.0022580077747593737",
            "extra": "mean: 1.0679260010000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 229.27921806603524,
            "unit": "iter/sec",
            "range": "stddev: 0.00026592307139276344",
            "extra": "mean: 4.361494288208832 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 104.8252803458676,
            "unit": "iter/sec",
            "range": "stddev: 0.00003705113453762461",
            "extra": "mean: 9.539683525772912 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 81.30383923296701,
            "unit": "iter/sec",
            "range": "stddev: 0.000030319686396975688",
            "extra": "mean: 12.299542179485675 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 328762.0787094104,
            "unit": "iter/sec",
            "range": "stddev: 1.6717291908462977e-7",
            "extra": "mean: 3.041713338489657 usec\nrounds: 77520"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23566.728659198976,
            "unit": "iter/sec",
            "range": "stddev: 0.00001554652967827806",
            "extra": "mean: 42.43270309006858 usec\nrounds: 8511"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "c856bab1242c62fd60b27e6c0c1e4ed25504941f",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-06T01:35:34Z",
          "tree_id": "b92a432d7fcfbd9efe0e9197e567d439cb6e6b89",
          "url": "https://github.com/ibis-project/ibis/commit/c856bab1242c62fd60b27e6c0c1e4ed25504941f"
        },
        "date": 1644111574939,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 261865.09158519472,
            "unit": "iter/sec",
            "range": "stddev: 0.000003084567841347237",
            "extra": "mean: 3.8187602400400964 usec\nrounds: 28491"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7476.311081073767,
            "unit": "iter/sec",
            "range": "stddev: 0.000028279405601223067",
            "extra": "mean: 133.75580405308355 usec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 131.5158951169908,
            "unit": "iter/sec",
            "range": "stddev: 0.00039476954981354013",
            "extra": "mean: 7.603643644066319 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.51671448613997,
            "unit": "iter/sec",
            "range": "stddev: 0.0005469344653309531",
            "extra": "mean: 15.263280642858692 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16039.45156356229,
            "unit": "iter/sec",
            "range": "stddev: 0.000023923957141671027",
            "extra": "mean: 62.34627138198137 usec\nrounds: 6419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.1245258301605645,
            "unit": "iter/sec",
            "range": "stddev: 0.023680173130211608",
            "extra": "mean: 470.6932651999921 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.20885631032406,
            "unit": "iter/sec",
            "range": "stddev: 0.003472199872805167",
            "extra": "mean: 31.047361333331956 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 624.9066671653384,
            "unit": "iter/sec",
            "range": "stddev: 0.00013826515513434",
            "extra": "mean: 1.6002389677423927 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 32.024320208146875,
            "unit": "iter/sec",
            "range": "stddev: 0.021604728609125684",
            "extra": "mean: 31.2262678333326 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5697239916244087,
            "unit": "iter/sec",
            "range": "stddev: 0.06156562128935514",
            "extra": "mean: 1.7552358943999877 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.9966451785122455,
            "unit": "iter/sec",
            "range": "stddev: 0.017682383067292088",
            "extra": "mean: 1.0033661142000028 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 35.233750498491126,
            "unit": "iter/sec",
            "range": "stddev: 0.011857956466411267",
            "extra": "mean: 28.3818777692379 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.855404908541473,
            "unit": "iter/sec",
            "range": "stddev: 0.0019548427732048322",
            "extra": "mean: 47.949200909086315 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 67.08938679336865,
            "unit": "iter/sec",
            "range": "stddev: 0.0015131525213563529",
            "extra": "mean: 14.905487258065733 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 73.04438441917372,
            "unit": "iter/sec",
            "range": "stddev: 0.0012593221705503477",
            "extra": "mean: 13.690306352113028 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.33713553311823,
            "unit": "iter/sec",
            "range": "stddev: 0.0009942674358421422",
            "extra": "mean: 11.718227870584114 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 122.33991808841165,
            "unit": "iter/sec",
            "range": "stddev: 0.0005039385295948822",
            "extra": "mean: 8.173946947367806 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.63610849532723,
            "unit": "iter/sec",
            "range": "stddev: 0.0017490113786984827",
            "extra": "mean: 15.714348718753435 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 150.53935938621777,
            "unit": "iter/sec",
            "range": "stddev: 0.0004979135894190754",
            "extra": "mean: 6.6427810246916215 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 187.38177653006193,
            "unit": "iter/sec",
            "range": "stddev: 0.0028169236191677113",
            "extra": "mean: 5.336698255924415 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.84536902348748,
            "unit": "iter/sec",
            "range": "stddev: 0.004944404189462239",
            "extra": "mean: 12.218162272724632 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 333838.16830926953,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025006204045954084",
            "extra": "mean: 2.995463355986289 usec\nrounds: 57472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5470407199601107,
            "unit": "iter/sec",
            "range": "stddev: 0.0952605184395075",
            "extra": "mean: 1.828017483000019 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 224.68493884640804,
            "unit": "iter/sec",
            "range": "stddev: 0.0002770514634930354",
            "extra": "mean: 4.450676601352385 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 233584.43385939702,
            "unit": "iter/sec",
            "range": "stddev: 0.0000058928594869085866",
            "extra": "mean: 4.281107193135722 usec\nrounds: 24815"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 186.17460247464737,
            "unit": "iter/sec",
            "range": "stddev: 0.0038065737810007703",
            "extra": "mean: 5.371301921464699 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.4434073620605061,
            "unit": "iter/sec",
            "range": "stddev: 0.058615126652996424",
            "extra": "mean: 692.8051126000014 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 38.18263535963196,
            "unit": "iter/sec",
            "range": "stddev: 0.0020044799214488083",
            "extra": "mean: 26.189915666670707 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.076514801182658,
            "unit": "iter/sec",
            "range": "stddev: 0.0014057720344299095",
            "extra": "mean: 32.178640571430606 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.0907464972388105,
            "unit": "iter/sec",
            "range": "stddev: 0.08643017360406617",
            "extra": "mean: 11.019709084400006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4677.719697377668,
            "unit": "iter/sec",
            "range": "stddev: 0.00007686865344580373",
            "extra": "mean: 213.77937642578297 usec\nrounds: 2367"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "ce42cc91f6cc8535b66d4c55b55f413bfb694294",
          "message": "chore(deps/poetry2nix): update",
          "timestamp": "2022-02-06T03:51:50Z",
          "tree_id": "2b6c3f4bf75d5e78bac49b757c0e8c4fdc28e718",
          "url": "https://github.com/ibis-project/ibis/commit/ce42cc91f6cc8535b66d4c55b55f413bfb694294"
        },
        "date": 1644119647243,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 82.95592622481567,
            "unit": "iter/sec",
            "range": "stddev: 0.0001224869315482417",
            "extra": "mean: 12.054593873015634 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 40.3238583089845,
            "unit": "iter/sec",
            "range": "stddev: 0.020408541280998206",
            "extra": "mean: 24.799214210540747 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5511.159272903145,
            "unit": "iter/sec",
            "range": "stddev: 0.0010388474492939654",
            "extra": "mean: 181.45002720511542 usec\nrounds: 2279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 156.79115904744393,
            "unit": "iter/sec",
            "range": "stddev: 0.00007543014520596595",
            "extra": "mean: 6.377910630135764 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 374316.8844790464,
            "unit": "iter/sec",
            "range": "stddev: 1.9632056187342797e-7",
            "extra": "mean: 2.6715332421932954 usec\nrounds: 59172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.7257816956767,
            "unit": "iter/sec",
            "range": "stddev: 0.000281439186325644",
            "extra": "mean: 10.027497232878064 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.838050737143817,
            "unit": "iter/sec",
            "range": "stddev: 0.0005976700299983994",
            "extra": "mean: 37.260530199982135 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 772.0980142134532,
            "unit": "iter/sec",
            "range": "stddev: 0.000024487072879978007",
            "extra": "mean: 1.295172350648659 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 73.03910675974838,
            "unit": "iter/sec",
            "range": "stddev: 0.0007092741031302614",
            "extra": "mean: 13.69129558620365 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 281.3872510603996,
            "unit": "iter/sec",
            "range": "stddev: 0.00011890050025699748",
            "extra": "mean: 3.5538212773731903 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.123867016768301,
            "unit": "iter/sec",
            "range": "stddev: 0.005367338893789195",
            "extra": "mean: 470.8392720000006 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18817.602369321474,
            "unit": "iter/sec",
            "range": "stddev: 0.0007695749930891185",
            "extra": "mean: 53.1417329569207 usec\nrounds: 5838"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.152220697963685,
            "unit": "iter/sec",
            "range": "stddev: 0.00030473542639423263",
            "extra": "mean: 22.147304928572403 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9237839595207428,
            "unit": "iter/sec",
            "range": "stddev: 0.0024705241968348574",
            "extra": "mean: 1.0825041826000075 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 189.90627962502745,
            "unit": "iter/sec",
            "range": "stddev: 0.00008432676238560269",
            "extra": "mean: 5.2657553082210535 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 43.01045498445152,
            "unit": "iter/sec",
            "range": "stddev: 0.014780555801874252",
            "extra": "mean: 23.250160928581312 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3266578394356312,
            "unit": "iter/sec",
            "range": "stddev: 0.003819311112385884",
            "extra": "mean: 753.7738596000054 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 283.0472053241384,
            "unit": "iter/sec",
            "range": "stddev: 0.00017743063685967143",
            "extra": "mean: 3.532979592060715 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10170.204681359084,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023460717185021774",
            "extra": "mean: 98.32643799518557 usec\nrounds: 6185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14567504999122527,
            "unit": "iter/sec",
            "range": "stddev: 0.013353730133062916",
            "extra": "mean: 6.864593491200003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 321866.06563350867,
            "unit": "iter/sec",
            "range": "stddev: 1.8579271758867726e-7",
            "extra": "mean: 3.106882355031007 usec\nrounds: 27549"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 235.05660583102028,
            "unit": "iter/sec",
            "range": "stddev: 0.0001567269766396309",
            "extra": "mean: 4.254294392044822 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.073126162413176,
            "unit": "iter/sec",
            "range": "stddev: 0.0020807421559877223",
            "extra": "mean: 325.4015446000267 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 110.32648993100425,
            "unit": "iter/sec",
            "range": "stddev: 0.0005093948930846234",
            "extra": "mean: 9.064006301889762 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.7217419612791,
            "unit": "iter/sec",
            "range": "stddev: 0.001257113128541735",
            "extra": "mean: 21.871432651163676 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 330248.9544683299,
            "unit": "iter/sec",
            "range": "stddev: 2.1132503134738518e-7",
            "extra": "mean: 3.0280186703691676 usec\nrounds: 74075"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.5675164634636,
            "unit": "iter/sec",
            "range": "stddev: 0.0005421332861597736",
            "extra": "mean: 17.996125500003473 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9301825302406744,
            "unit": "iter/sec",
            "range": "stddev: 0.004030403118781602",
            "extra": "mean: 1.0750578165999969 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.78467771718834,
            "unit": "iter/sec",
            "range": "stddev: 0.00007176601188650746",
            "extra": "mean: 6.219498115106132 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 80.28355594201221,
            "unit": "iter/sec",
            "range": "stddev: 0.00013620201615856397",
            "extra": "mean: 12.455850868418027 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.05248627692045,
            "unit": "iter/sec",
            "range": "stddev: 0.00025222940821175804",
            "extra": "mean: 10.303703061729856 msec\nrounds: 81"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "638a80ebd2d45c6d7c98eb902ef91e9405ff7b6a",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-07T01:15:04Z",
          "tree_id": "563c6eb66904a1772a460b52771e0fbec064b8f2",
          "url": "https://github.com/ibis-project/ibis/commit/638a80ebd2d45c6d7c98eb902ef91e9405ff7b6a"
        },
        "date": 1644197546329,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 76.89427861482734,
            "unit": "iter/sec",
            "range": "stddev: 0.0004295085814989304",
            "extra": "mean: 13.004868736842175 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4766.005053506913,
            "unit": "iter/sec",
            "range": "stddev: 0.00010003628162204295",
            "extra": "mean: 209.81933270594874 usec\nrounds: 3189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 130.96957650238315,
            "unit": "iter/sec",
            "range": "stddev: 0.0009861057098027996",
            "extra": "mean: 7.635361025862397 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.691332184082963,
            "unit": "iter/sec",
            "range": "stddev: 0.0020623035079326162",
            "extra": "mean: 44.06969109999892 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 183.50959144233605,
            "unit": "iter/sec",
            "range": "stddev: 0.0006698612977867792",
            "extra": "mean: 5.449306448454649 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 264776.5250444317,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036567124934804472",
            "extra": "mean: 3.776769862177894 usec\nrounds: 21322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 31.870003893143267,
            "unit": "iter/sec",
            "range": "stddev: 0.01586100873104351",
            "extra": "mean: 31.377467142862415 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5861905081811245,
            "unit": "iter/sec",
            "range": "stddev: 0.016107205986710168",
            "extra": "mean: 1.7059300450000023 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.65452298035584,
            "unit": "iter/sec",
            "range": "stddev: 0.0013335335003375132",
            "extra": "mean: 11.674806714285733 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 32.14213796251837,
            "unit": "iter/sec",
            "range": "stddev: 0.004380177258849134",
            "extra": "mean: 31.111807222224023 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.7938741149105,
            "unit": "iter/sec",
            "range": "stddev: 0.0006835267317514309",
            "extra": "mean: 5.186886796019111 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 69.60591203381992,
            "unit": "iter/sec",
            "range": "stddev: 0.0009851569706664893",
            "extra": "mean: 14.366595750000702 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.38928421585374,
            "unit": "iter/sec",
            "range": "stddev: 0.0029942458431245376",
            "extra": "mean: 24.16084305263149 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.0277495071980047,
            "unit": "iter/sec",
            "range": "stddev: 0.012805782106484278",
            "extra": "mean: 972.9997368000113 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 637.6235318457334,
            "unit": "iter/sec",
            "range": "stddev: 0.0002457865687332399",
            "extra": "mean: 1.5683235483880167 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.436468421959801,
            "unit": "iter/sec",
            "range": "stddev: 0.006312373583364324",
            "extra": "mean: 410.43010899999217 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 36.599442224912956,
            "unit": "iter/sec",
            "range": "stddev: 0.01746548669204362",
            "extra": "mean: 27.322820764719406 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.461014542905957,
            "unit": "iter/sec",
            "range": "stddev: 0.0008151693412155604",
            "extra": "mean: 31.78537038709347 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 84.04506120586582,
            "unit": "iter/sec",
            "range": "stddev: 0.00490666295673634",
            "extra": "mean: 11.898379103449404 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 15900.557437295212,
            "unit": "iter/sec",
            "range": "stddev: 0.00004830109992699868",
            "extra": "mean: 62.89087687293726 usec\nrounds: 7943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 292346.2083017966,
            "unit": "iter/sec",
            "range": "stddev: 0.000025478916891428554",
            "extra": "mean: 3.420601915136433 usec\nrounds: 69445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 352515.170276039,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031237511239815163",
            "extra": "mean: 2.8367573492424296 usec\nrounds: 65790"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.7030586259191582,
            "unit": "iter/sec",
            "range": "stddev: 0.01603875029772263",
            "extra": "mean: 587.1788467999977 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 149.91179459848067,
            "unit": "iter/sec",
            "range": "stddev: 0.0008899746745912741",
            "extra": "mean: 6.6705892133328835 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.32506131451188,
            "unit": "iter/sec",
            "range": "stddev: 0.0009958651171426487",
            "extra": "mean: 14.635918076923925 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5764035264042675,
            "unit": "iter/sec",
            "range": "stddev: 0.01800474991844704",
            "extra": "mean: 1.7348957009999935 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 125.34193428901726,
            "unit": "iter/sec",
            "range": "stddev: 0.0004765249195652483",
            "extra": "mean: 7.978175904754823 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7347.340938206873,
            "unit": "iter/sec",
            "range": "stddev: 0.00004108545184515948",
            "extra": "mean: 136.10366095847064 usec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 65.53343627325953,
            "unit": "iter/sec",
            "range": "stddev: 0.0009138246934407415",
            "extra": "mean: 15.259385999998951 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 223.59638037362825,
            "unit": "iter/sec",
            "range": "stddev: 0.000486643277454023",
            "extra": "mean: 4.472344312233525 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08957601072086036,
            "unit": "iter/sec",
            "range": "stddev: 0.21509701205914392",
            "extra": "mean: 11.16370322759999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "77859c248057cfa57d3af87f56abd8acdcb8e8da",
          "message": "chore(conda-lock): relock",
          "timestamp": "2022-02-06T22:19:10-05:00",
          "tree_id": "68478403ae0332d37e198c093bd096aecf2987de",
          "url": "https://github.com/ibis-project/ibis/commit/77859c248057cfa57d3af87f56abd8acdcb8e8da"
        },
        "date": 1644204237917,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 785.8482447729334,
            "unit": "iter/sec",
            "range": "stddev: 0.000033466769140843505",
            "extra": "mean: 1.272510318183563 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 82.74675393992423,
            "unit": "iter/sec",
            "range": "stddev: 0.0002078932072355946",
            "extra": "mean: 12.085066209678988 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.298699736484238,
            "unit": "iter/sec",
            "range": "stddev: 0.0002969690599124241",
            "extra": "mean: 41.154465500000015 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5748.242422356717,
            "unit": "iter/sec",
            "range": "stddev: 0.0008917192032545488",
            "extra": "mean: 173.9662189803768 usec\nrounds: 2571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 332258.2091976313,
            "unit": "iter/sec",
            "range": "stddev: 2.9404110339607063e-7",
            "extra": "mean: 3.0097074272894413 usec\nrounds: 51283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3194484880226147,
            "unit": "iter/sec",
            "range": "stddev: 0.0013788016886491941",
            "extra": "mean: 757.8924142000005 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 78.23563437174658,
            "unit": "iter/sec",
            "range": "stddev: 0.00007001261446542514",
            "extra": "mean: 12.781899297299395 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9517.638498935557,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027965765608603336",
            "extra": "mean: 105.06807966197067 usec\nrounds: 4971"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 138.4690960063631,
            "unit": "iter/sec",
            "range": "stddev: 0.00010432266734712306",
            "extra": "mean: 7.221828038467493 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 36.294175370999604,
            "unit": "iter/sec",
            "range": "stddev: 0.018072082899974303",
            "extra": "mean: 27.55263040909416 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 173.68853979981648,
            "unit": "iter/sec",
            "range": "stddev: 0.003913964003643047",
            "extra": "mean: 5.757432247127778 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.70602510397885,
            "unit": "iter/sec",
            "range": "stddev: 0.0002701334699223818",
            "extra": "mean: 22.36834962791178 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9111285481961321,
            "unit": "iter/sec",
            "range": "stddev: 0.003949957017113195",
            "extra": "mean: 1.0975399705999962 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.655929770518625,
            "unit": "iter/sec",
            "range": "stddev: 0.00025261647950548176",
            "extra": "mean: 17.65040312727086 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.9692165077091817,
            "unit": "iter/sec",
            "range": "stddev: 0.0010103219610950339",
            "extra": "mean: 336.78918240001394 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 290.31292313876617,
            "unit": "iter/sec",
            "range": "stddev: 0.000017590950622978026",
            "extra": "mean: 3.444559026819525 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1102926641611734,
            "unit": "iter/sec",
            "range": "stddev: 0.002895499802990911",
            "extra": "mean: 473.8679222000201 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.92179987270773,
            "unit": "iter/sec",
            "range": "stddev: 0.00012755115654397242",
            "extra": "mean: 20.440785142859706 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 293423.7022582952,
            "unit": "iter/sec",
            "range": "stddev: 3.5008493429260105e-7",
            "extra": "mean: 3.408040973866928 usec\nrounds: 68971"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 82.34741228613774,
            "unit": "iter/sec",
            "range": "stddev: 0.00010620582944425565",
            "extra": "mean: 12.14367242683033 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.462091831633956,
            "unit": "iter/sec",
            "range": "stddev: 0.00014293738715341397",
            "extra": "mean: 25.340775249992475 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 269.08812155604284,
            "unit": "iter/sec",
            "range": "stddev: 0.00017833634991693402",
            "extra": "mean: 3.7162547132045387 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1611869640085668,
            "unit": "iter/sec",
            "range": "stddev: 0.010667374948680685",
            "extra": "mean: 6.203975651200006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 104.57130357442044,
            "unit": "iter/sec",
            "range": "stddev: 0.0006076174784633917",
            "extra": "mean: 9.562852960786975 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 290317.36781323404,
            "unit": "iter/sec",
            "range": "stddev: 3.131390717195293e-7",
            "extra": "mean: 3.4445062916226097 usec\nrounds: 25511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.36281105456624,
            "unit": "iter/sec",
            "range": "stddev: 0.006680573703268288",
            "extra": "mean: 7.024306366194962 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 30.348314031788213,
            "unit": "iter/sec",
            "range": "stddev: 0.029150313157546157",
            "extra": "mean: 32.95075960241331 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23160.11151621758,
            "unit": "iter/sec",
            "range": "stddev: 0.000011700295302769418",
            "extra": "mean: 43.177685016747965 usec\nrounds: 6921"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9104711351595997,
            "unit": "iter/sec",
            "range": "stddev: 0.0050863438557865745",
            "extra": "mean: 1.0983324582000136 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.95637520469052,
            "unit": "iter/sec",
            "range": "stddev: 0.00016441028118753103",
            "extra": "mean: 12.5068200933318 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 229.39663983721968,
            "unit": "iter/sec",
            "range": "stddev: 0.00013384180661672176",
            "extra": "mean: 4.359261760371042 msec\nrounds: 217"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29585319+EdAbati@users.noreply.github.com",
            "name": "Edoardo Abati",
            "username": "EdAbati"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "58eea56a8476438c3857f5da7a7088bf2020d38c",
          "message": "refactor: move coercion functions from schema.py to udf\n\nfixes #3033\n\nBREAKING CHANGE: coercion functions previously in expr/schema.py are now in udf/vectorized.py",
          "timestamp": "2022-02-07T06:35:53-05:00",
          "tree_id": "5a705c67bca582d9fa24ce00d27c3b36bd827020",
          "url": "https://github.com/ibis-project/ibis/commit/58eea56a8476438c3857f5da7a7088bf2020d38c"
        },
        "date": 1644235685295,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 116.46800796194688,
            "unit": "iter/sec",
            "range": "stddev: 0.0007683433446322612",
            "extra": "mean: 8.586048799999446 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.5337574345647946,
            "unit": "iter/sec",
            "range": "stddev: 0.011886481340299463",
            "extra": "mean: 651.9935795999913 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 71.62415977604448,
            "unit": "iter/sec",
            "range": "stddev: 0.0005317956829616105",
            "extra": "mean: 13.961769368420033 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 224.19608675743248,
            "unit": "iter/sec",
            "range": "stddev: 0.0006373680183167285",
            "extra": "mean: 4.4603811532265665 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 30.785388074202697,
            "unit": "iter/sec",
            "range": "stddev: 0.021072017143554778",
            "extra": "mean: 32.48294280356895 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 31.465673819532505,
            "unit": "iter/sec",
            "range": "stddev: 0.014971141850719615",
            "extra": "mean: 31.780663771428408 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5768048230382488,
            "unit": "iter/sec",
            "range": "stddev: 0.013136620843200745",
            "extra": "mean: 1.7336886934000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7188.365142539265,
            "unit": "iter/sec",
            "range": "stddev: 0.000053472444585106054",
            "extra": "mean: 139.11368999359894 usec\nrounds: 4787"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 81.74419011495071,
            "unit": "iter/sec",
            "range": "stddev: 0.001018930123847415",
            "extra": "mean: 12.233285308641204 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 77.59482736414122,
            "unit": "iter/sec",
            "range": "stddev: 0.005566992458954483",
            "extra": "mean: 12.887456986109983 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.637218977999034,
            "unit": "iter/sec",
            "range": "stddev: 0.0022506454985096423",
            "extra": "mean: 50.923707736842516 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 278770.97044781165,
            "unit": "iter/sec",
            "range": "stddev: 0.000004071305804167932",
            "extra": "mean: 3.587174081984296 usec\nrounds: 32680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.9427314721244466,
            "unit": "iter/sec",
            "range": "stddev: 0.004873314376748654",
            "extra": "mean: 1.060747444599997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.84957398066274,
            "unit": "iter/sec",
            "range": "stddev: 0.009977535279707725",
            "extra": "mean: 17.59028133333326 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 64.12763480004344,
            "unit": "iter/sec",
            "range": "stddev: 0.0006263671620618713",
            "extra": "mean: 15.593901180327371 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 28.276318645848207,
            "unit": "iter/sec",
            "range": "stddev: 0.0024404835954871915",
            "extra": "mean: 35.365282607141275 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5695195822086272,
            "unit": "iter/sec",
            "range": "stddev: 0.031889862524946654",
            "extra": "mean: 1.7558658757999979 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 38.918581820891774,
            "unit": "iter/sec",
            "range": "stddev: 0.0016764668663296573",
            "extra": "mean: 25.694666999998258 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.963455407462504,
            "unit": "iter/sec",
            "range": "stddev: 0.001142132438596881",
            "extra": "mean: 17.868803716981603 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 120.79770639541397,
            "unit": "iter/sec",
            "range": "stddev: 0.0007523724035172844",
            "extra": "mean: 8.278302873786721 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 140.0912466469859,
            "unit": "iter/sec",
            "range": "stddev: 0.0006379561466285055",
            "extra": "mean: 7.138204733946633 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 318402.748640074,
            "unit": "iter/sec",
            "range": "stddev: 0.000003971309995095323",
            "extra": "mean: 3.1406764051852174 usec\nrounds: 62501"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.9747237346881,
            "unit": "iter/sec",
            "range": "stddev: 0.0038795622797801474",
            "extra": "mean: 5.182025814815277 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.066374468142644,
            "unit": "iter/sec",
            "range": "stddev: 0.0025177736544569696",
            "extra": "mean: 33.25974673333386 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.1189758518278405,
            "unit": "iter/sec",
            "range": "stddev: 0.006516783128707512",
            "extra": "mean: 471.9260953999992 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 14619.474175266687,
            "unit": "iter/sec",
            "range": "stddev: 0.000055770354054703114",
            "extra": "mean: 68.40191295606282 usec\nrounds: 4469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 182.10267777156471,
            "unit": "iter/sec",
            "range": "stddev: 0.0005426353619554522",
            "extra": "mean: 5.491407442423396 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 269809.72108457936,
            "unit": "iter/sec",
            "range": "stddev: 0.000004692179937782448",
            "extra": "mean: 3.7063156804736557 usec\nrounds: 23641"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 623.6745940379739,
            "unit": "iter/sec",
            "range": "stddev: 0.00019044359525671506",
            "extra": "mean: 1.6034002500013855 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4446.748221974411,
            "unit": "iter/sec",
            "range": "stddev: 0.0000747285053990331",
            "extra": "mean: 224.88343168572464 usec\nrounds: 2752"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08783270069581256,
            "unit": "iter/sec",
            "range": "stddev: 0.049831395188166996",
            "extra": "mean: 11.385281245800007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "f07f23a9f42a99da0c21c5222870ded459447fdb",
          "message": "test: fix running clickhouse tests in parallel",
          "timestamp": "2022-02-07T08:08:22-05:00",
          "tree_id": "dc39c6716c02c1c49e78b9c1543b24c9ca14a511",
          "url": "https://github.com/ibis-project/ibis/commit/f07f23a9f42a99da0c21c5222870ded459447fdb"
        },
        "date": 1644240332980,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 14977.006162287315,
            "unit": "iter/sec",
            "range": "stddev: 0.000024933617002910335",
            "extra": "mean: 66.76901839821893 usec\nrounds: 1848"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09286895333613418,
            "unit": "iter/sec",
            "range": "stddev: 0.05308879817566794",
            "extra": "mean: 10.7678612074 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 264670.5878489358,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033567948601994574",
            "extra": "mean: 3.7782815541663557 usec\nrounds: 12225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.32882631875303,
            "unit": "iter/sec",
            "range": "stddev: 0.0010237483181972792",
            "extra": "mean: 32.971932032255275 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 174.30162230072975,
            "unit": "iter/sec",
            "range": "stddev: 0.0003086114340037294",
            "extra": "mean: 5.737181253968245 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 261783.4365100985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035938315964178435",
            "extra": "mean: 3.819951381688827 usec\nrounds: 57468"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7037.9375886382195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000315751264013064",
            "extra": "mean: 142.08707983065412 usec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 135.32333657343824,
            "unit": "iter/sec",
            "range": "stddev: 0.0010590744463274337",
            "extra": "mean: 7.389708422222599 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 27.150188324721807,
            "unit": "iter/sec",
            "range": "stddev: 0.0019630885946051225",
            "extra": "mean: 36.832157038463066 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 116.0592798072582,
            "unit": "iter/sec",
            "range": "stddev: 0.0003930081832899747",
            "extra": "mean: 8.616286449999677 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 192.9790167367632,
            "unit": "iter/sec",
            "range": "stddev: 0.0003294107481329676",
            "extra": "mean: 5.1819105357141995 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 214.57283365080914,
            "unit": "iter/sec",
            "range": "stddev: 0.00021102111554898378",
            "extra": "mean: 4.660422211822849 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 116.86124233719528,
            "unit": "iter/sec",
            "range": "stddev: 0.0004486400245572389",
            "extra": "mean: 8.557157018017719 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6023120533341222,
            "unit": "iter/sec",
            "range": "stddev: 0.016818473081535005",
            "extra": "mean: 1.6602689494000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 28.899334811312123,
            "unit": "iter/sec",
            "range": "stddev: 0.020107884195297934",
            "extra": "mean: 34.60287257575798 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 39.09738900888686,
            "unit": "iter/sec",
            "range": "stddev: 0.0011123756586039102",
            "extra": "mean: 25.57715554285989 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6034404961719382,
            "unit": "iter/sec",
            "range": "stddev: 0.021499396979397442",
            "extra": "mean: 1.6571642214000009 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 316610.3514384323,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038901012039429955",
            "extra": "mean: 3.158456429035798 usec\nrounds: 53476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 594.4949397021765,
            "unit": "iter/sec",
            "range": "stddev: 0.0000988608329835917",
            "extra": "mean: 1.682100104167361 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.818205595292916,
            "unit": "iter/sec",
            "range": "stddev: 0.0018872166664906352",
            "extra": "mean: 17.001538722222215 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.515788998373,
            "unit": "iter/sec",
            "range": "stddev: 0.0008964446018415433",
            "extra": "mean: 12.11889278571544 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4328.436521409618,
            "unit": "iter/sec",
            "range": "stddev: 0.00007516403872120529",
            "extra": "mean: 231.03030275567855 usec\nrounds: 2649"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 26.39475874841074,
            "unit": "iter/sec",
            "range": "stddev: 0.027816323903168464",
            "extra": "mean: 37.886309533335336 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.2153039834454464,
            "unit": "iter/sec",
            "range": "stddev: 0.007880427776651848",
            "extra": "mean: 451.40531840000904 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 79.1378568870758,
            "unit": "iter/sec",
            "range": "stddev: 0.0007992056292179194",
            "extra": "mean: 12.636177416668362 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 70.58317919829247,
            "unit": "iter/sec",
            "range": "stddev: 0.0005504200228542768",
            "extra": "mean: 14.167681469697696 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 63.923431672781064,
            "unit": "iter/sec",
            "range": "stddev: 0.0007018046651614287",
            "extra": "mean: 15.643715830509855 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6139669310170945,
            "unit": "iter/sec",
            "range": "stddev: 0.012423610786522887",
            "extra": "mean: 619.5913811999958 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 18.869161067337867,
            "unit": "iter/sec",
            "range": "stddev: 0.002269380164019945",
            "extra": "mean: 52.99652678947023 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.983935991986719,
            "unit": "iter/sec",
            "range": "stddev: 0.02212735375701378",
            "extra": "mean: 1.0163262734000056 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 60.266721181012954,
            "unit": "iter/sec",
            "range": "stddev: 0.0018008334446356269",
            "extra": "mean: 16.592905344833163 msec\nrounds: 29"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "saul@voltrondata.com",
            "name": "Saul Pwanson",
            "username": "saulpw"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "5d36a58d2df83b045487e9701e309978c3dd777d",
          "message": "fix(histogram): cross_join needs onclause=True\n\nalso add basic test for col.histogram()\n\ncloses #622",
          "timestamp": "2022-02-07T17:44:31-05:00",
          "tree_id": "55e201788c1a749712673e87b52bc537a999a915",
          "url": "https://github.com/ibis-project/ibis/commit/5d36a58d2df83b045487e9701e309978c3dd777d"
        },
        "date": 1644274182541,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.12823198284618376,
            "unit": "iter/sec",
            "range": "stddev: 0.1822640161134762",
            "extra": "mean: 7.798366505800004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 303286.593627423,
            "unit": "iter/sec",
            "range": "stddev: 4.998758622776918e-7",
            "extra": "mean: 3.297211353919801 usec\nrounds: 59521"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 251.0316283203902,
            "unit": "iter/sec",
            "range": "stddev: 0.0000788379628532875",
            "extra": "mean: 3.9835617794093485 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 204.66672046215453,
            "unit": "iter/sec",
            "range": "stddev: 0.00010487039354615618",
            "extra": "mean: 4.885992201086315 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.85740384348328,
            "unit": "iter/sec",
            "range": "stddev: 0.0015898317620590303",
            "extra": "mean: 43.74950046153659 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8001719315986533,
            "unit": "iter/sec",
            "range": "stddev: 0.012011622033679326",
            "extra": "mean: 1.2497314146000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.855557023491535,
            "unit": "iter/sec",
            "range": "stddev: 0.0006482241267062043",
            "extra": "mean: 20.896214822222543 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 245.86661570484685,
            "unit": "iter/sec",
            "range": "stddev: 0.00018160566629326348",
            "extra": "mean: 4.067245962341063 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 20438.871559808616,
            "unit": "iter/sec",
            "range": "stddev: 0.00002258420664468908",
            "extra": "mean: 48.92638016114446 usec\nrounds: 6200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 89.33769686042321,
            "unit": "iter/sec",
            "range": "stddev: 0.005770918570689445",
            "extra": "mean: 11.193483099999213 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.1642845741533934,
            "unit": "iter/sec",
            "range": "stddev: 0.00593757289313918",
            "extra": "mean: 858.896546599999 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 154.62899558283084,
            "unit": "iter/sec",
            "range": "stddev: 0.005014540402457752",
            "extra": "mean: 6.46709238607403 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 27.891778633504202,
            "unit": "iter/sec",
            "range": "stddev: 0.031427955123486916",
            "extra": "mean: 35.85285876314746 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8947.346087808803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040876305058863315",
            "extra": "mean: 111.764984855403 usec\nrounds: 4292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.844801596982535,
            "unit": "iter/sec",
            "range": "stddev: 0.0011035047727627097",
            "extra": "mean: 27.14087080555474 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8261144360505623,
            "unit": "iter/sec",
            "range": "stddev: 0.003056278354964248",
            "extra": "mean: 547.6108070000009 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 134.9209679819916,
            "unit": "iter/sec",
            "range": "stddev: 0.0002953902575276344",
            "extra": "mean: 7.411746409449669 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 294864.11717866437,
            "unit": "iter/sec",
            "range": "stddev: 5.152084404970663e-7",
            "extra": "mean: 3.3913926508530676 usec\nrounds: 22832"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 351182.3140410913,
            "unit": "iter/sec",
            "range": "stddev: 3.8333999400647464e-7",
            "extra": "mean: 2.8475238074859077 usec\nrounds: 53764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 665.8331810687505,
            "unit": "iter/sec",
            "range": "stddev: 0.00009061505951539523",
            "extra": "mean: 1.501877690136841 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.1390832667941,
            "unit": "iter/sec",
            "range": "stddev: 0.0005048795913943611",
            "extra": "mean: 12.635981599999013 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 134.778854230127,
            "unit": "iter/sec",
            "range": "stddev: 0.0004009503110346462",
            "extra": "mean: 7.419561515878141 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4679.04770493087,
            "unit": "iter/sec",
            "range": "stddev: 0.0014426633899139157",
            "extra": "mean: 213.71870155249346 usec\nrounds: 2255"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.6231458633816493,
            "unit": "iter/sec",
            "range": "stddev: 0.004184010735724132",
            "extra": "mean: 381.2216522000199 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 81.8731072071465,
            "unit": "iter/sec",
            "range": "stddev: 0.00031051541326242784",
            "extra": "mean: 12.214022822779986 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 32.79005864920696,
            "unit": "iter/sec",
            "range": "stddev: 0.022173020716693182",
            "extra": "mean: 30.49704822727377 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 66.80997920088058,
            "unit": "iter/sec",
            "range": "stddev: 0.0002371503534806516",
            "extra": "mean: 14.967823848489084 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7914594863037354,
            "unit": "iter/sec",
            "range": "stddev: 0.015837619708756353",
            "extra": "mean: 1.2634885516000167 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.23325876737348,
            "unit": "iter/sec",
            "range": "stddev: 0.000586533883166773",
            "extra": "mean: 15.098154893936762 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 69.92109321536267,
            "unit": "iter/sec",
            "range": "stddev: 0.00016479073400712364",
            "extra": "mean: 14.301835884057454 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.42109889387587,
            "unit": "iter/sec",
            "range": "stddev: 0.0004560668455381854",
            "extra": "mean: 26.027365921056333 msec\nrounds: 38"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "3a711169fbfff7c3a1b94a0daecf69802e78f8b4",
          "message": "refactor: remove blanket __call__ for Expr\n\n`__call__` is gone and it isn't coming back.\n\nResolves #2258\n\nBREAKING CHANGE: `Expr() -> Expr.pipe()`",
          "timestamp": "2022-02-07T17:58:04-05:00",
          "tree_id": "5ec9e4b78232b3bdb645232a8983c82aaea9b6a1",
          "url": "https://github.com/ibis-project/ibis/commit/3a711169fbfff7c3a1b94a0daecf69802e78f8b4"
        },
        "date": 1644275468400,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 364970.59197523334,
            "unit": "iter/sec",
            "range": "stddev: 0.000001624095053320937",
            "extra": "mean: 2.739946784720286 usec\nrounds: 28488"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8115464885379169,
            "unit": "iter/sec",
            "range": "stddev: 0.013605401833543451",
            "extra": "mean: 1.2322153001999936 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 242.11515727585962,
            "unit": "iter/sec",
            "range": "stddev: 0.0003243950310821677",
            "extra": "mean: 4.1302659909913295 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 213.6872896986854,
            "unit": "iter/sec",
            "range": "stddev: 0.0005074158508992568",
            "extra": "mean: 4.67973552105075 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 49.25968821920537,
            "unit": "iter/sec",
            "range": "stddev: 0.0012082653094436541",
            "extra": "mean: 20.300575098039698 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 254.5575120268796,
            "unit": "iter/sec",
            "range": "stddev: 0.0004779368371138628",
            "extra": "mean: 3.9283853461547285 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.376821277199635,
            "unit": "iter/sec",
            "range": "stddev: 0.0015225572586378374",
            "extra": "mean: 41.022575857145476 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 671.4874863703125,
            "unit": "iter/sec",
            "range": "stddev: 0.00009206496954975376",
            "extra": "mean: 1.4892310285712744 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 141.9083665144439,
            "unit": "iter/sec",
            "range": "stddev: 0.0004931040009050505",
            "extra": "mean: 7.0468008656714165 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.11343205002621,
            "unit": "iter/sec",
            "range": "stddev: 0.001796892075222538",
            "extra": "mean: 24.92930544444268 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7996409365265879,
            "unit": "iter/sec",
            "range": "stddev: 0.019138945566728943",
            "extra": "mean: 1.2505612885999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.859221929462552,
            "unit": "iter/sec",
            "range": "stddev: 0.005010481210301907",
            "extra": "mean: 537.8594046000046 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.9305631839135,
            "unit": "iter/sec",
            "range": "stddev: 0.0004979321625704836",
            "extra": "mean: 11.372609975309988 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 39.04945833190954,
            "unit": "iter/sec",
            "range": "stddev: 0.01921056048434028",
            "extra": "mean: 25.608549842107358 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.05585273812878,
            "unit": "iter/sec",
            "range": "stddev: 0.005027838780076858",
            "extra": "mean: 10.746234337501903 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 171.68323549080387,
            "unit": "iter/sec",
            "range": "stddev: 0.0002895999935894996",
            "extra": "mean: 5.824680535296439 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 317231.77567194775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014242462040549603",
            "extra": "mean: 3.1522693396077357 usec\nrounds: 24690"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 71.30909992285727,
            "unit": "iter/sec",
            "range": "stddev: 0.0006099545550988263",
            "extra": "mean: 14.02345564706058 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.52232338780625,
            "unit": "iter/sec",
            "range": "stddev: 0.0017297438250247171",
            "extra": "mean: 24.677755775003618 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.6973715692472,
            "unit": "iter/sec",
            "range": "stddev: 0.0006951779568586983",
            "extra": "mean: 14.55659768572072 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.724779199588414,
            "unit": "iter/sec",
            "range": "stddev: 0.00716100771577258",
            "extra": "mean: 367.00221439999723 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19895.555757848917,
            "unit": "iter/sec",
            "range": "stddev: 0.00001738068679365285",
            "extra": "mean: 50.262481338602164 usec\nrounds: 6725"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8909.106901749998,
            "unit": "iter/sec",
            "range": "stddev: 0.00002162463334002237",
            "extra": "mean: 112.24469646935901 usec\nrounds: 4787"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.12846610601907324,
            "unit": "iter/sec",
            "range": "stddev: 0.06639665511266539",
            "extra": "mean: 7.7841543655999885 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.1627084698498402,
            "unit": "iter/sec",
            "range": "stddev: 0.003984743623982827",
            "extra": "mean: 860.0608200000011 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 307966.19907049066,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031177279458380483",
            "extra": "mean: 3.247109595203041 usec\nrounds: 68023"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5525.023593581771,
            "unit": "iter/sec",
            "range": "stddev: 0.000053999618954413015",
            "extra": "mean: 180.99470220573636 usec\nrounds: 2720"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 33.984255664620775,
            "unit": "iter/sec",
            "range": "stddev: 0.02019154497862635",
            "extra": "mean: 29.425390682928725 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.27719951174758,
            "unit": "iter/sec",
            "range": "stddev: 0.0008457006636304474",
            "extra": "mean: 15.55761619354987 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 85.15944560058041,
            "unit": "iter/sec",
            "range": "stddev: 0.0005931060848720249",
            "extra": "mean: 11.742678606554765 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 138.1886511570059,
            "unit": "iter/sec",
            "range": "stddev: 0.0005898290316120536",
            "extra": "mean: 7.236484267176394 msec\nrounds: 131"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "d81cef873ff871d06f79b1928b350fdaac3c3143",
          "message": "chore(conda-lock): relock",
          "timestamp": "2022-02-07T22:09:49-05:00",
          "tree_id": "594d56afcde8d6d5e6a5721975efc0e76c420e85",
          "url": "https://github.com/ibis-project/ibis/commit/d81cef873ff871d06f79b1928b350fdaac3c3143"
        },
        "date": 1644290140454,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 33.636991020608136,
            "unit": "iter/sec",
            "range": "stddev: 0.01889278726040717",
            "extra": "mean: 29.729175222222974 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 182.85213569982412,
            "unit": "iter/sec",
            "range": "stddev: 0.0006144949521429032",
            "extra": "mean: 5.468899754289071 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 119.45221195082868,
            "unit": "iter/sec",
            "range": "stddev: 0.0009459208104764795",
            "extra": "mean: 8.37154861905479 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 598.5411644588152,
            "unit": "iter/sec",
            "range": "stddev: 0.0001774242834867024",
            "extra": "mean: 1.6707288644118123 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.512307929767886,
            "unit": "iter/sec",
            "range": "stddev: 0.001748227643289507",
            "extra": "mean: 32.77365980645461 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 114.52671708780714,
            "unit": "iter/sec",
            "range": "stddev: 0.00517325052948383",
            "extra": "mean: 8.731587051720904 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.840781945559392,
            "unit": "iter/sec",
            "range": "stddev: 0.00295432623756751",
            "extra": "mean: 50.40123936364373 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 72.8613738229422,
            "unit": "iter/sec",
            "range": "stddev: 0.0020980572980309224",
            "extra": "mean: 13.724693174603926 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 66.06041549364755,
            "unit": "iter/sec",
            "range": "stddev: 0.0011572870742154056",
            "extra": "mean: 15.13765834694396 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 33.317629453116524,
            "unit": "iter/sec",
            "range": "stddev: 0.01584817710175718",
            "extra": "mean: 30.014140153853603 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 146.69923377440432,
            "unit": "iter/sec",
            "range": "stddev: 0.00047496658915662426",
            "extra": "mean: 6.81666818749586 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4292.202468939809,
            "unit": "iter/sec",
            "range": "stddev: 0.00009729416711955147",
            "extra": "mean: 232.98062177551563 usec\nrounds: 2636"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.5774104013280346,
            "unit": "iter/sec",
            "range": "stddev: 0.004001521639788097",
            "extra": "mean: 633.9504285999965 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7477.3099797501645,
            "unit": "iter/sec",
            "range": "stddev: 0.00008856380926369838",
            "extra": "mean: 133.73793552870902 usec\nrounds: 4312"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.085566885092761,
            "unit": "iter/sec",
            "range": "stddev: 0.007878483723449643",
            "extra": "mean: 479.48594079998657 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 216.90380121300316,
            "unit": "iter/sec",
            "range": "stddev: 0.000396964015778285",
            "extra": "mean: 4.610338751131352 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6270427199689196,
            "unit": "iter/sec",
            "range": "stddev: 0.007121794402229892",
            "extra": "mean: 1.594787672599989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 78.12144384675909,
            "unit": "iter/sec",
            "range": "stddev: 0.006283232714458581",
            "extra": "mean: 12.800582666669255 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 262497.97377855127,
            "unit": "iter/sec",
            "range": "stddev: 0.000010891292215998704",
            "extra": "mean: 3.809553215232132 usec\nrounds: 21413"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 15802.186921590965,
            "unit": "iter/sec",
            "range": "stddev: 0.00005540209483858877",
            "extra": "mean: 63.28238015167839 usec\nrounds: 4998"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 30.93261039285851,
            "unit": "iter/sec",
            "range": "stddev: 0.002316800019104557",
            "extra": "mean: 32.32834175000221 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.0922591077372635,
            "unit": "iter/sec",
            "range": "stddev: 0.06451882822354683",
            "extra": "mean: 10.839038275200005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.629190390065908,
            "unit": "iter/sec",
            "range": "stddev: 0.011302330508812724",
            "extra": "mean: 1.589344045600012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 66.26820786111216,
            "unit": "iter/sec",
            "range": "stddev: 0.0007675238630601339",
            "extra": "mean: 15.090192299991639 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 300490.60953400773,
            "unit": "iter/sec",
            "range": "stddev: 0.000014004326787112778",
            "extra": "mean: 3.327891016463947 usec\nrounds: 50503"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.66870842784106,
            "unit": "iter/sec",
            "range": "stddev: 0.0020276703129137137",
            "extra": "mean: 18.63283148213871 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 269566.359925028,
            "unit": "iter/sec",
            "range": "stddev: 0.000011791867627128162",
            "extra": "mean: 3.709661696207646 usec\nrounds: 58480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 202.96103919287586,
            "unit": "iter/sec",
            "range": "stddev: 0.0007469269731299533",
            "extra": "mean: 4.927054000002879 msec\nrounds: 199"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 39.58768802359528,
            "unit": "iter/sec",
            "range": "stddev: 0.003345795045866069",
            "extra": "mean: 25.260378918919802 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 79.90949207392872,
            "unit": "iter/sec",
            "range": "stddev: 0.001879437046467099",
            "extra": "mean: 12.514157880954173 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.9474626079315015,
            "unit": "iter/sec",
            "range": "stddev: 0.009333096056860472",
            "extra": "mean: 1.0554506231999994 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "11cbf08adbbea9464ea569ccabda3758ca17c23f",
          "message": "fix(clickhouse): disconnect from clickhouse when computing version",
          "timestamp": "2022-02-07T22:10:41-05:00",
          "tree_id": "a02a391fa7826deb1eff3c4b211d42e2e49eff45",
          "url": "https://github.com/ibis-project/ibis/commit/11cbf08adbbea9464ea569ccabda3758ca17c23f"
        },
        "date": 1644291940546,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5554471575124027,
            "unit": "iter/sec",
            "range": "stddev: 0.018606429344955648",
            "extra": "mean: 1.8003512781999802 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 181.28844179138537,
            "unit": "iter/sec",
            "range": "stddev: 0.0023130827856812216",
            "extra": "mean: 5.516071461139995 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 248772.0840772423,
            "unit": "iter/sec",
            "range": "stddev: 0.000009167176965675157",
            "extra": "mean: 4.019743628828972 usec\nrounds: 29586"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.45816537249219,
            "unit": "iter/sec",
            "range": "stddev: 0.002473670464878431",
            "extra": "mean: 17.106250147059104 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 33.980734942716076,
            "unit": "iter/sec",
            "range": "stddev: 0.01760335093258087",
            "extra": "mean: 29.428439428569646 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 304400.4033203259,
            "unit": "iter/sec",
            "range": "stddev: 0.00001797067639687635",
            "extra": "mean: 3.2851467642363223 usec\nrounds: 59524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 182.41462082412772,
            "unit": "iter/sec",
            "range": "stddev: 0.0006192560079976122",
            "extra": "mean: 5.482016712707118 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.54139833128528,
            "unit": "iter/sec",
            "range": "stddev: 0.0011353558097340075",
            "extra": "mean: 12.572069651517294 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 28.62955424978816,
            "unit": "iter/sec",
            "range": "stddev: 0.0014913820763281507",
            "extra": "mean: 34.92894060714897 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 591.606264251963,
            "unit": "iter/sec",
            "range": "stddev: 0.0001712546311779358",
            "extra": "mean: 1.6903134067797894 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 62.80414779918377,
            "unit": "iter/sec",
            "range": "stddev: 0.0010297460126738726",
            "extra": "mean: 15.922515232552785 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.014559600161762,
            "unit": "iter/sec",
            "range": "stddev: 0.0038485194574860433",
            "extra": "mean: 496.38640619999705 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 39.66977683263747,
            "unit": "iter/sec",
            "range": "stddev: 0.0017642337451283996",
            "extra": "mean: 25.208107527775937 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 15223.117083429062,
            "unit": "iter/sec",
            "range": "stddev: 0.00003987533313147251",
            "extra": "mean: 65.68956899691311 usec\nrounds: 3819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 138.96584598137088,
            "unit": "iter/sec",
            "range": "stddev: 0.0008655033561256407",
            "extra": "mean: 7.19601275362333 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5445000040596233,
            "unit": "iter/sec",
            "range": "stddev: 0.012205154393330565",
            "extra": "mean: 1.8365472774000182 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 246894.0661742364,
            "unit": "iter/sec",
            "range": "stddev: 0.000004889422964430032",
            "extra": "mean: 4.050320104875614 usec\nrounds: 24039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4117.741476635323,
            "unit": "iter/sec",
            "range": "stddev: 0.00014317117097723428",
            "extra": "mean: 242.85157426082927 usec\nrounds: 2572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.505787734491456,
            "unit": "iter/sec",
            "range": "stddev: 0.002933230596458654",
            "extra": "mean: 29.84558989999755 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 82.67752764254095,
            "unit": "iter/sec",
            "range": "stddev: 0.0008201031872339453",
            "extra": "mean: 12.095185094594669 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 29.073117633814412,
            "unit": "iter/sec",
            "range": "stddev: 0.017858539303208652",
            "extra": "mean: 34.39603597368995 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.241301025093428,
            "unit": "iter/sec",
            "range": "stddev: 0.003217740775545042",
            "extra": "mean: 49.40393894445253 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 111.49949177659082,
            "unit": "iter/sec",
            "range": "stddev: 0.004647924026550887",
            "extra": "mean: 8.968650745096479 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.9301409080246597,
            "unit": "iter/sec",
            "range": "stddev: 0.025983089865237185",
            "extra": "mean: 1.075105923600006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 216.39468390478797,
            "unit": "iter/sec",
            "range": "stddev: 0.0005085995436663953",
            "extra": "mean: 4.621185613043953 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 70.53948786071358,
            "unit": "iter/sec",
            "range": "stddev: 0.0014438861898176916",
            "extra": "mean: 14.176456766663629 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7186.716380178927,
            "unit": "iter/sec",
            "range": "stddev: 0.00007405991598400428",
            "extra": "mean: 139.14560518319814 usec\nrounds: 4939"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08370396399220394,
            "unit": "iter/sec",
            "range": "stddev: 0.04487903331710411",
            "extra": "mean: 11.94686550439999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.073916233162386,
            "unit": "iter/sec",
            "range": "stddev: 0.000978153751054292",
            "extra": "mean: 16.109826166659026 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.5389893564070818,
            "unit": "iter/sec",
            "range": "stddev: 0.011705606485762219",
            "extra": "mean: 649.7770734000369 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 120.54464223349218,
            "unit": "iter/sec",
            "range": "stddev: 0.0009212698083790779",
            "extra": "mean: 8.295681844266651 msec\nrounds: 122"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "1b2d384ca9879f612f32c11742bff14acb25ab2f",
          "message": "chore(setup.py): regenerate",
          "timestamp": "2022-02-08T12:25:18Z",
          "tree_id": "873d4bae0157132945ff8e140d768a2db70d09f3",
          "url": "https://github.com/ibis-project/ibis/commit/1b2d384ca9879f612f32c11742bff14acb25ab2f"
        },
        "date": 1644324429842,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 22870.088833351605,
            "unit": "iter/sec",
            "range": "stddev: 0.00002294472820110172",
            "extra": "mean: 43.72523461918929 usec\nrounds: 3836"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9225279004951678,
            "unit": "iter/sec",
            "range": "stddev: 0.003366840234821392",
            "extra": "mean: 1.0839780557999916 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1172249582946856,
            "unit": "iter/sec",
            "range": "stddev: 0.002007379922940459",
            "extra": "mean: 472.316366799987 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 80.43442168652479,
            "unit": "iter/sec",
            "range": "stddev: 0.00042346856997059706",
            "extra": "mean: 12.432488218753868 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 324869.2544566896,
            "unit": "iter/sec",
            "range": "stddev: 2.2626064219452936e-7",
            "extra": "mean: 3.078161402723065 usec\nrounds: 70922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.4440727569027,
            "unit": "iter/sec",
            "range": "stddev: 0.0003181563981935085",
            "extra": "mean: 10.817351185182732 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9166379108340482,
            "unit": "iter/sec",
            "range": "stddev: 0.005481555364820175",
            "extra": "mean: 1.090943313799994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 261.21316222715524,
            "unit": "iter/sec",
            "range": "stddev: 0.0038235868886232383",
            "extra": "mean: 3.828291007519688 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 109.1370505988642,
            "unit": "iter/sec",
            "range": "stddev: 0.0005551982772013169",
            "extra": "mean: 9.162791137498516 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.94655596945175,
            "unit": "iter/sec",
            "range": "stddev: 0.0007464434717873033",
            "extra": "mean: 20.85655538297957 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 190.1904466802056,
            "unit": "iter/sec",
            "range": "stddev: 0.00010442656804726205",
            "extra": "mean: 5.257887646067958 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.14641718856372,
            "unit": "iter/sec",
            "range": "stddev: 0.001310142305753853",
            "extra": "mean: 17.498909803922448 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 319853.7767574876,
            "unit": "iter/sec",
            "range": "stddev: 2.0157549882586992e-7",
            "extra": "mean: 3.1264286141545163 usec\nrounds: 23310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6404.3036166489655,
            "unit": "iter/sec",
            "range": "stddev: 0.000043409847169199975",
            "extra": "mean: 156.14500183913006 usec\nrounds: 2719"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 82.8457830756193,
            "unit": "iter/sec",
            "range": "stddev: 0.0005468351424007777",
            "extra": "mean: 12.07062040909467 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 289.1840627870755,
            "unit": "iter/sec",
            "range": "stddev: 0.00014049954269519766",
            "extra": "mean: 3.458005224638863 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 76.23921339791967,
            "unit": "iter/sec",
            "range": "stddev: 0.00016266742394336595",
            "extra": "mean: 13.116609621621395 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3144925192624906,
            "unit": "iter/sec",
            "range": "stddev: 0.004664880428667371",
            "extra": "mean: 760.7498600000099 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.63780958272776,
            "unit": "iter/sec",
            "range": "stddev: 0.0005067029896147102",
            "extra": "mean: 24.016633200004378 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.9636176159960366,
            "unit": "iter/sec",
            "range": "stddev: 0.0015163523285014367",
            "extra": "mean: 337.4254474000054 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10040.226497482647,
            "unit": "iter/sec",
            "range": "stddev: 0.000003595091445795824",
            "extra": "mean: 99.59934671301755 usec\nrounds: 4883"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 38.51008810267019,
            "unit": "iter/sec",
            "range": "stddev: 0.02160625826794579",
            "extra": "mean: 25.967221818188012 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 28.213986914723836,
            "unit": "iter/sec",
            "range": "stddev: 0.034264255954403675",
            "extra": "mean: 35.44341333333989 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 390362.4567932436,
            "unit": "iter/sec",
            "range": "stddev: 2.9983174990673146e-7",
            "extra": "mean: 2.5617217603732128 usec\nrounds: 47168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.84041920346456,
            "unit": "iter/sec",
            "range": "stddev: 0.001141528998079149",
            "extra": "mean: 27.144099378379426 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 157.22754572388314,
            "unit": "iter/sec",
            "range": "stddev: 0.00013559916771448398",
            "extra": "mean: 6.360208673333622 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 769.1118452193289,
            "unit": "iter/sec",
            "range": "stddev: 0.000018668665803228937",
            "extra": "mean: 1.300201012656135 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 223.7460497455818,
            "unit": "iter/sec",
            "range": "stddev: 0.00033018560382520667",
            "extra": "mean: 4.46935264840244 msec\nrounds: 219"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14419411927559803,
            "unit": "iter/sec",
            "range": "stddev: 0.02033344774797882",
            "extra": "mean: 6.935095585199986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 156.68155386457116,
            "unit": "iter/sec",
            "range": "stddev: 0.00011634709248897023",
            "extra": "mean: 6.382372240604387 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.026121920536934,
            "unit": "iter/sec",
            "range": "stddev: 0.0014082790147696479",
            "extra": "mean: 41.62136541666447 msec\nrounds: 24"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "093f36d58404896aefa4041f47676ebbf2dfff2f",
          "message": "chore: remove mentions of omniscidb",
          "timestamp": "2022-02-08T09:11:29-05:00",
          "tree_id": "0f3fc5d97f2a939273dd6de7ede390068a084630",
          "url": "https://github.com/ibis-project/ibis/commit/093f36d58404896aefa4041f47676ebbf2dfff2f"
        },
        "date": 1644330791294,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7044.801833870173,
            "unit": "iter/sec",
            "range": "stddev: 0.00011150497635972604",
            "extra": "mean: 141.94863440901565 usec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 148.04185138681612,
            "unit": "iter/sec",
            "range": "stddev: 0.0005595304064614591",
            "extra": "mean: 6.754846623655877 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 573.2714707792509,
            "unit": "iter/sec",
            "range": "stddev: 0.0002997337391054556",
            "extra": "mean: 1.7443742641521909 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.84499647400527,
            "unit": "iter/sec",
            "range": "stddev: 0.0009621029986332925",
            "extra": "mean: 11.648902569444571 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.5709394203909886,
            "unit": "iter/sec",
            "range": "stddev: 0.03127285744418358",
            "extra": "mean: 636.5617839999913 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 217.0730515301058,
            "unit": "iter/sec",
            "range": "stddev: 0.0009519692308340768",
            "extra": "mean: 4.606744102739581 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.9503699767510558,
            "unit": "iter/sec",
            "range": "stddev: 0.03931627120421482",
            "extra": "mean: 1.0522217920000059 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.368299529506565,
            "unit": "iter/sec",
            "range": "stddev: 0.0028648413865553506",
            "extra": "mean: 29.968563399993776 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 32.78607551290733,
            "unit": "iter/sec",
            "range": "stddev: 0.014567963736358972",
            "extra": "mean: 30.500753272721425 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4481.347155317707,
            "unit": "iter/sec",
            "range": "stddev: 0.00013750218919879556",
            "extra": "mean: 223.14718439373053 usec\nrounds: 2294"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 307650.5714159745,
            "unit": "iter/sec",
            "range": "stddev: 0.000005286956555899281",
            "extra": "mean: 3.2504408992236176 usec\nrounds: 54348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 190.7697592960142,
            "unit": "iter/sec",
            "range": "stddev: 0.0007812889267355458",
            "extra": "mean: 5.241920961111646 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 38.43355174913633,
            "unit": "iter/sec",
            "range": "stddev: 0.0026770524567506396",
            "extra": "mean: 26.018932794117102 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 273723.12691896426,
            "unit": "iter/sec",
            "range": "stddev: 0.000009948303601442498",
            "extra": "mean: 3.6533266708444767 usec\nrounds: 18762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5816888710707031,
            "unit": "iter/sec",
            "range": "stddev: 0.07034683205688326",
            "extra": "mean: 1.7191320819999873 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08993788064530742,
            "unit": "iter/sec",
            "range": "stddev: 0.12504049776001241",
            "extra": "mean: 11.118785464200016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 265111.1469902079,
            "unit": "iter/sec",
            "range": "stddev: 0.000009518873451356255",
            "extra": "mean: 3.7720028424038157 usec\nrounds: 73530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5779412686653136,
            "unit": "iter/sec",
            "range": "stddev: 0.03879155052200715",
            "extra": "mean: 1.730279622199987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 15585.165697483824,
            "unit": "iter/sec",
            "range": "stddev: 0.00007966299951382027",
            "extra": "mean: 64.16357832893922 usec\nrounds: 5362"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.72128744538677,
            "unit": "iter/sec",
            "range": "stddev: 0.004536542924786941",
            "extra": "mean: 48.259549636363566 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 75.28861900526681,
            "unit": "iter/sec",
            "range": "stddev: 0.0014477982062971048",
            "extra": "mean: 13.282219985068993 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 68.36292633383061,
            "unit": "iter/sec",
            "range": "stddev: 0.001314579381010144",
            "extra": "mean: 14.627811500004968 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 128.46954218905157,
            "unit": "iter/sec",
            "range": "stddev: 0.0008259793997168503",
            "extra": "mean: 7.783946163118047 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 185.64334846441076,
            "unit": "iter/sec",
            "range": "stddev: 0.0006284858667600649",
            "extra": "mean: 5.386672931035326 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.0969369663864015,
            "unit": "iter/sec",
            "range": "stddev: 0.040913075813146196",
            "extra": "mean: 476.8860561999986 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.6490570820801,
            "unit": "iter/sec",
            "range": "stddev: 0.0009884608997366784",
            "extra": "mean: 14.56684246666858 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.449745097568364,
            "unit": "iter/sec",
            "range": "stddev: 0.0011025359216104258",
            "extra": "mean: 32.84099741379633 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 28.757729965176093,
            "unit": "iter/sec",
            "range": "stddev: 0.025546981243007146",
            "extra": "mean: 34.77325926667163 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.86301524175834,
            "unit": "iter/sec",
            "range": "stddev: 0.0021178204179258084",
            "extra": "mean: 16.988596250002914 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 120.11578500485265,
            "unit": "iter/sec",
            "range": "stddev: 0.001201728255971611",
            "extra": "mean: 8.325300458716564 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 87.12522078893313,
            "unit": "iter/sec",
            "range": "stddev: 0.000961000620004013",
            "extra": "mean: 11.477732749998637 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "34cc697807ac925ee679c62194ea09fe4f4aa55c",
          "message": "ci: use --all for conda-lock extras",
          "timestamp": "2022-02-08T09:42:17-05:00",
          "tree_id": "73c398afcde349c0b2121d617a62b088e3f9facd",
          "url": "https://github.com/ibis-project/ibis/commit/34cc697807ac925ee679c62194ea09fe4f4aa55c"
        },
        "date": 1644332065349,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5208.521241980882,
            "unit": "iter/sec",
            "range": "stddev: 0.0013252170784223201",
            "extra": "mean: 191.99307318552553 usec\nrounds: 1626"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 779.2052871121592,
            "unit": "iter/sec",
            "range": "stddev: 0.000020024932711975007",
            "extra": "mean: 1.2833588484828382 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 155.08014953687382,
            "unit": "iter/sec",
            "range": "stddev: 0.00013461552060911564",
            "extra": "mean: 6.448278538461348 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 27.63681655319709,
            "unit": "iter/sec",
            "range": "stddev: 0.03532596568218495",
            "extra": "mean: 36.18361753334133 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.865870522199465,
            "unit": "iter/sec",
            "range": "stddev: 0.0009446471095754012",
            "extra": "mean: 25.084112974358508 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 323920.2442355096,
            "unit": "iter/sec",
            "range": "stddev: 3.012671639941932e-7",
            "extra": "mean: 3.08717969252005 usec\nrounds: 23095"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8696993805452965,
            "unit": "iter/sec",
            "range": "stddev: 0.012487084903386642",
            "extra": "mean: 1.149822596599995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 154.12974427632264,
            "unit": "iter/sec",
            "range": "stddev: 0.00040225339991962084",
            "extra": "mean: 6.488040350000241 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 328183.07942789706,
            "unit": "iter/sec",
            "range": "stddev: 3.7875806514170984e-7",
            "extra": "mean: 3.047079702412578 usec\nrounds: 58480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 51.52544432017989,
            "unit": "iter/sec",
            "range": "stddev: 0.0019618855350422705",
            "extra": "mean: 19.407886980769824 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 84.27166200615224,
            "unit": "iter/sec",
            "range": "stddev: 0.0005087696602086762",
            "extra": "mean: 11.866385166664864 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.5044241688244,
            "unit": "iter/sec",
            "range": "stddev: 0.0006825023481330363",
            "extra": "mean: 21.050670911116264 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 98.92952320124886,
            "unit": "iter/sec",
            "range": "stddev: 0.006981964981980232",
            "extra": "mean: 10.10820599999997 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8436150825274416,
            "unit": "iter/sec",
            "range": "stddev: 0.024681543814078746",
            "extra": "mean: 1.185374729199998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0804026086333303,
            "unit": "iter/sec",
            "range": "stddev: 0.002909767786013497",
            "extra": "mean: 480.67619019999483 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 73.77435296498658,
            "unit": "iter/sec",
            "range": "stddev: 0.00911521975790548",
            "extra": "mean: 13.554846092308008 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.6516840987032,
            "unit": "iter/sec",
            "range": "stddev: 0.00010842560300803",
            "extra": "mean: 13.577422054054663 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.982602674516215,
            "unit": "iter/sec",
            "range": "stddev: 0.0009024055523071014",
            "extra": "mean: 29.426822000008457 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10017.27499024061,
            "unit": "iter/sec",
            "range": "stddev: 0.000010840724255025256",
            "extra": "mean: 99.82754800824135 usec\nrounds: 4843"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 178.3127110607551,
            "unit": "iter/sec",
            "range": "stddev: 0.005234925246359329",
            "extra": "mean: 5.6081251530031295 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 75.68083815013324,
            "unit": "iter/sec",
            "range": "stddev: 0.00044185989173247406",
            "extra": "mean: 13.213384318184106 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 384053.76643956517,
            "unit": "iter/sec",
            "range": "stddev: 2.9881164754538446e-7",
            "extra": "mean: 2.6038020907089847 usec\nrounds: 59881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 37.83604604540741,
            "unit": "iter/sec",
            "range": "stddev: 0.021997054309624148",
            "extra": "mean: 26.42982300000085 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14880686700463425,
            "unit": "iter/sec",
            "range": "stddev: 0.0733067058502084",
            "extra": "mean: 6.7201199792000015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23022.78931529885,
            "unit": "iter/sec",
            "range": "stddev: 0.000017587281336203638",
            "extra": "mean: 43.43522352156916 usec\nrounds: 5731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.603717280309017,
            "unit": "iter/sec",
            "range": "stddev: 0.001142243349960315",
            "extra": "mean: 40.64426479165917 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3027684725042785,
            "unit": "iter/sec",
            "range": "stddev: 0.0018470279360262292",
            "extra": "mean: 767.5961009999924 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 276.55592670684075,
            "unit": "iter/sec",
            "range": "stddev: 0.00013847156176861487",
            "extra": "mean: 3.6159051512934526 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 289.2778350614308,
            "unit": "iter/sec",
            "range": "stddev: 0.00017670720341569763",
            "extra": "mean: 3.4568842780078226 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 235.13770441475657,
            "unit": "iter/sec",
            "range": "stddev: 0.00020462766464934427",
            "extra": "mean: 4.252827093336388 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.9554503273245194,
            "unit": "iter/sec",
            "range": "stddev: 0.0016271587408145107",
            "extra": "mean: 338.3579114000099 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "bf59c1832f2ba1afc73fbbd074dd4375995d8b45",
          "message": "test: swap xfail_unsupported for more instructive test decorators\n\nchore: remove conditional xfail for ancient pandas\n\nchore: pytest.raises instead of xfail\n\ntest: allow per-backend reason in xfail_unsupported decorator\n\n    If you pass a two-tuple the second element in the tuple is printed as\n    the reason for the xfail\n\ntest: allow passing global reason for xfail backends\n\ntest: remove all usage of \"spark\" as backend name in test suite\n\n    There is no spark backend, only the pyspark backend.  Either name can be\n    passed to `pytest`, but internally we only use `pyspark`\n\ntest: add new decorator taxonomy\n\n    More docs to follow on this, but we want to distinguish between xfails\n    that are:\n    1. due to not exposing already available functionality (not\n    implemented)\n    2. due to functionality not available upstream but that may exist in the\n    future (not yet)\n    3. due to things that will not happen, like typed csvs (never)\n\n    Each of these serves a purpose:\n    1. not implemented xfails force an xpass when we add that functionality\n    2. not yet xfails similarly force an xpass if things become available\n    upstream\n    3. never xfails force an xpass if a mistake has been made in writing the test\n\ntest: enable PYTEST_BACKENDS='all' and add filter functions\n\n    _get_backends_to_test now accepts `keep` and `discard` keywords\n    to allow selecting subsets of the provided backends for feeding\n    different fixture sets\n\nfix: force multiple dispatch inside csv constructor\n\n    The CSV backend is pretty broken.  It doesn't grab the dispatchers by\n    default, so in the test suite it will fail _unless_ another backend has\n    run before it and imported the dispatcher.\n\n    Because multiple dispatch raises a `NotImplementedError` when it fails,\n    this was being swallowed by `xfail_unsupported`.\n\ntest: add module-level marker to skip sqlite/mysql array tests",
          "timestamp": "2022-02-08T10:56:02-05:00",
          "tree_id": "54c93e8e28e5c6fe8c4ad5f08f983bcf6d48369a",
          "url": "https://github.com/ibis-project/ibis/commit/bf59c1832f2ba1afc73fbbd074dd4375995d8b45"
        },
        "date": 1644336386944,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.559402311787085,
            "unit": "iter/sec",
            "range": "stddev: 0.00140834635548111",
            "extra": "mean: 37.65144969230724 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 148.52117190656045,
            "unit": "iter/sec",
            "range": "stddev: 0.0034217486431678545",
            "extra": "mean: 6.733046791666395 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23205.687342540932,
            "unit": "iter/sec",
            "range": "stddev: 0.000015326825032089706",
            "extra": "mean: 43.09288431059693 usec\nrounds: 7693"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 82.96494873566591,
            "unit": "iter/sec",
            "range": "stddev: 0.00016551274066065947",
            "extra": "mean: 12.05328292537242 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 91.69146414312392,
            "unit": "iter/sec",
            "range": "stddev: 0.00030250026263888637",
            "extra": "mean: 10.906140602565474 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.0014215194459,
            "unit": "iter/sec",
            "range": "stddev: 0.000955823000286735",
            "extra": "mean: 15.15118882258273 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 78.29433733074522,
            "unit": "iter/sec",
            "range": "stddev: 0.00010041918502286702",
            "extra": "mean: 12.77231577777608 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10211.334185442909,
            "unit": "iter/sec",
            "range": "stddev: 0.000002143012855347062",
            "extra": "mean: 97.93039595409401 usec\nrounds: 5190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 191.96613587217834,
            "unit": "iter/sec",
            "range": "stddev: 0.00012179240079466283",
            "extra": "mean: 5.2092521186437555 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 236.36198065075817,
            "unit": "iter/sec",
            "range": "stddev: 0.00009018693883370919",
            "extra": "mean: 4.230798867257641 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.2894103559270806,
            "unit": "iter/sec",
            "range": "stddev: 0.0033696071400235055",
            "extra": "mean: 775.5482925999956 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 780.1487881999424,
            "unit": "iter/sec",
            "range": "stddev: 0.00002529544612107696",
            "extra": "mean: 1.2818067721508946 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 394036.8585644391,
            "unit": "iter/sec",
            "range": "stddev: 1.9081986665555347e-7",
            "extra": "mean: 2.537833652524829 usec\nrounds: 58480"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.61091870076493,
            "unit": "iter/sec",
            "range": "stddev: 0.000506192211667652",
            "extra": "mean: 18.65291668627443 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.22044286558908,
            "unit": "iter/sec",
            "range": "stddev: 0.0007420881153584196",
            "extra": "mean: 24.259807282051362 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.9686286263198127,
            "unit": "iter/sec",
            "range": "stddev: 0.0012000735013710721",
            "extra": "mean: 336.85587720000285 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9101404565886381,
            "unit": "iter/sec",
            "range": "stddev: 0.00654365413791318",
            "extra": "mean: 1.0987315119999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 285.8152172456312,
            "unit": "iter/sec",
            "range": "stddev: 0.00014938635095726027",
            "extra": "mean: 3.4987640253618637 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9022680213084905,
            "unit": "iter/sec",
            "range": "stddev: 0.0047951306531885994",
            "extra": "mean: 1.108318123199996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 275.91227978527075,
            "unit": "iter/sec",
            "range": "stddev: 0.0001294592660841925",
            "extra": "mean: 3.624340318518088 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 33.15658532420454,
            "unit": "iter/sec",
            "range": "stddev: 0.025318940605555798",
            "extra": "mean: 30.15992118072523 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5683.75458334766,
            "unit": "iter/sec",
            "range": "stddev: 0.0009860121196096025",
            "extra": "mean: 175.94003846151512 usec\nrounds: 2886"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 160.41729565783098,
            "unit": "iter/sec",
            "range": "stddev: 0.00007203726454948226",
            "extra": "mean: 6.233741791365149 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 104.64595377316925,
            "unit": "iter/sec",
            "range": "stddev: 0.005138022798559298",
            "extra": "mean: 9.556031207547706 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 317634.95502925676,
            "unit": "iter/sec",
            "range": "stddev: 2.62710729745156e-7",
            "extra": "mean: 3.1482681114485396 usec\nrounds: 22472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1473427750326412,
            "unit": "iter/sec",
            "range": "stddev: 0.01700080447844602",
            "extra": "mean: 6.786895385799999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 327422.4827768378,
            "unit": "iter/sec",
            "range": "stddev: 2.0078837715433245e-7",
            "extra": "mean: 3.054158014804294 usec\nrounds: 74069"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 39.26198308114486,
            "unit": "iter/sec",
            "range": "stddev: 0.017669406193049086",
            "extra": "mean: 25.469931000001857 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.578271355230726,
            "unit": "iter/sec",
            "range": "stddev: 0.00046108600193510175",
            "extra": "mean: 21.94027922222277 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.83102114976735,
            "unit": "iter/sec",
            "range": "stddev: 0.00012484904413007816",
            "extra": "mean: 9.917582789473785 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.06521921727237,
            "unit": "iter/sec",
            "range": "stddev: 0.002644794621858514",
            "extra": "mean: 484.21009820000904 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "b5104735df7a4329a01a79e8d7f74282caf8aebd",
          "message": "refactor(backends): remove the parquet backend\n\nRemove the parquet backend\n\nBREAKING CHANGE: Use the datafusion backend to read parquet files",
          "timestamp": "2022-02-08T19:35:34-05:00",
          "tree_id": "97f680109d7a7172dd884838ec0062d38b41a2fc",
          "url": "https://github.com/ibis-project/ibis/commit/b5104735df7a4329a01a79e8d7f74282caf8aebd"
        },
        "date": 1644367203126,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.458132488860044,
            "unit": "iter/sec",
            "range": "stddev: 0.0012556477351016466",
            "extra": "mean: 289.1734203999931 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 266.5417980083898,
            "unit": "iter/sec",
            "range": "stddev: 0.00006483936706873052",
            "extra": "mean: 3.751756788136184 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 122.59213646984713,
            "unit": "iter/sec",
            "range": "stddev: 0.0004998932866056126",
            "extra": "mean: 8.157130047619008 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1595049065343701,
            "unit": "iter/sec",
            "range": "stddev: 0.034701897139440316",
            "extra": "mean: 6.2693996173999835 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 368028.322012401,
            "unit": "iter/sec",
            "range": "stddev: 2.5577096508341355e-7",
            "extra": "mean: 2.7171821845991087 usec\nrounds: 27549"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 90.1906235554848,
            "unit": "iter/sec",
            "range": "stddev: 0.00016206460609181266",
            "extra": "mean: 11.087627078936928 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 108.5914746764726,
            "unit": "iter/sec",
            "range": "stddev: 0.00013001906870267933",
            "extra": "mean: 9.208826042553595 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 39.50196212324451,
            "unit": "iter/sec",
            "range": "stddev: 0.02160323111616703",
            "extra": "mean: 25.315198188890992 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 853.3765750344484,
            "unit": "iter/sec",
            "range": "stddev: 0.00016061608310852704",
            "extra": "mean: 1.1718156195693945 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 75.65007249819737,
            "unit": "iter/sec",
            "range": "stddev: 0.0005374823811314989",
            "extra": "mean: 13.218757986303695 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.4970639862549606,
            "unit": "iter/sec",
            "range": "stddev: 0.002486065991425446",
            "extra": "mean: 667.9741207999996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 26001.857577790797,
            "unit": "iter/sec",
            "range": "stddev: 0.000010909743350777095",
            "extra": "mean: 38.458790761708464 usec\nrounds: 5477"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 372504.0631597706,
            "unit": "iter/sec",
            "range": "stddev: 6.170252158103548e-7",
            "extra": "mean: 2.684534475993327 usec\nrounds: 72993"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9600706781605821,
            "unit": "iter/sec",
            "range": "stddev: 0.0034249076731334717",
            "extra": "mean: 1.0415899816000205 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.39169881216689,
            "unit": "iter/sec",
            "range": "stddev: 0.0026546234859213787",
            "extra": "mean: 418.1128472000182 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 29.435213911927036,
            "unit": "iter/sec",
            "range": "stddev: 0.0006331237626688566",
            "extra": "mean: 33.972914312499825 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 314.63990545546943,
            "unit": "iter/sec",
            "range": "stddev: 0.00012019350630635083",
            "extra": "mean: 3.1782363986933273 msec\nrounds: 306"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 178.73845627938863,
            "unit": "iter/sec",
            "range": "stddev: 0.00009576100900962008",
            "extra": "mean: 5.594766905879985 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 450119.6257818456,
            "unit": "iter/sec",
            "range": "stddev: 6.201022155769276e-7",
            "extra": "mean: 2.221631634619413 usec\nrounds: 67110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 51.66647396477348,
            "unit": "iter/sec",
            "range": "stddev: 0.0007108296714932323",
            "extra": "mean: 19.354910897960757 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9795858585900837,
            "unit": "iter/sec",
            "range": "stddev: 0.005666932330074855",
            "extra": "mean: 1.020839563200002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 7244.824139914761,
            "unit": "iter/sec",
            "range": "stddev: 0.000032046388902065504",
            "extra": "mean: 138.0295754165491 usec\nrounds: 2758"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 63.11630528411702,
            "unit": "iter/sec",
            "range": "stddev: 0.0004856397405598616",
            "extra": "mean: 15.84376644828173 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 42.72671650309118,
            "unit": "iter/sec",
            "range": "stddev: 0.01715602793953063",
            "extra": "mean: 23.404560000009646 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 219.62027013300374,
            "unit": "iter/sec",
            "range": "stddev: 0.00011513027483425059",
            "extra": "mean: 4.553313769236293 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 92.40558169816337,
            "unit": "iter/sec",
            "range": "stddev: 0.00015797318736937053",
            "extra": "mean: 10.821857095888783 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.83088440393288,
            "unit": "iter/sec",
            "range": "stddev: 0.00018356930377834505",
            "extra": "mean: 20.4788426875074 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11578.525363143917,
            "unit": "iter/sec",
            "range": "stddev: 0.000004338281524009679",
            "extra": "mean: 86.36678407970166 usec\nrounds: 5942"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 181.66687718826213,
            "unit": "iter/sec",
            "range": "stddev: 0.00009563098538752793",
            "extra": "mean: 5.504580777065353 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 338.048042520516,
            "unit": "iter/sec",
            "range": "stddev: 0.000074998699013051",
            "extra": "mean: 2.958159415874477 msec\nrounds: 315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 105.40414136580998,
            "unit": "iter/sec",
            "range": "stddev: 0.00022563044881514883",
            "extra": "mean: 9.487293260418047 msec\nrounds: 96"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "eed518ae0307fe61934cd5bdf09d344add5e1141",
          "message": "chore: fix dask array literal test",
          "timestamp": "2022-02-08T19:40:37-05:00",
          "tree_id": "ed6a694d458fce837c8410d7cdefadd663f744b6",
          "url": "https://github.com/ibis-project/ibis/commit/eed518ae0307fe61934cd5bdf09d344add5e1141"
        },
        "date": 1644368640870,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 90.05963626691134,
            "unit": "iter/sec",
            "range": "stddev: 0.0005090093867048649",
            "extra": "mean: 11.103753484372092 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 66.05135413107847,
            "unit": "iter/sec",
            "range": "stddev: 0.0006177107495714879",
            "extra": "mean: 15.13973503125321 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 277310.6926859833,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054155730374219535",
            "extra": "mean: 3.6060636188030593 usec\nrounds: 69445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 77.00575852427123,
            "unit": "iter/sec",
            "range": "stddev: 0.0006238912423278186",
            "extra": "mean: 12.986041812506954 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 129.91906009762897,
            "unit": "iter/sec",
            "range": "stddev: 0.0005585299854334067",
            "extra": "mean: 7.697100019416242 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 645.8549688628714,
            "unit": "iter/sec",
            "range": "stddev: 0.00016873020632855322",
            "extra": "mean: 1.5483352272734794 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5830891546235202,
            "unit": "iter/sec",
            "range": "stddev: 0.016839950431170897",
            "extra": "mean: 1.7150036011999987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09272255007708687,
            "unit": "iter/sec",
            "range": "stddev: 0.04241621692895902",
            "extra": "mean: 10.784863004399995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 204.56022566836242,
            "unit": "iter/sec",
            "range": "stddev: 0.00044483715829765115",
            "extra": "mean: 4.888535866308743 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 126.73117741834741,
            "unit": "iter/sec",
            "range": "stddev: 0.0005313982770622828",
            "extra": "mean: 7.890718135592937 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 34.808614540682576,
            "unit": "iter/sec",
            "range": "stddev: 0.016930004909233815",
            "extra": "mean: 28.728520603175685 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 324531.60149780876,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026968739558013584",
            "extra": "mean: 3.0813640193580722 usec\nrounds: 51283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.31568969722976,
            "unit": "iter/sec",
            "range": "stddev: 0.005951613478232919",
            "extra": "mean: 12.607845986302088 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7183.252456568864,
            "unit": "iter/sec",
            "range": "stddev: 0.00003067397276020993",
            "extra": "mean: 139.2127042793172 usec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 39.51081038142451,
            "unit": "iter/sec",
            "range": "stddev: 0.0011715502469022054",
            "extra": "mean: 25.309528970586157 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 188.96944963984282,
            "unit": "iter/sec",
            "range": "stddev: 0.000427074467304865",
            "extra": "mean: 5.29186067856948 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 152.28342436827492,
            "unit": "iter/sec",
            "range": "stddev: 0.00040404465819768786",
            "extra": "mean: 6.56670287096807 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.341061094537483,
            "unit": "iter/sec",
            "range": "stddev: 0.007105046297961732",
            "extra": "mean: 427.1567291999986 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 65.88829284397957,
            "unit": "iter/sec",
            "range": "stddev: 0.0011313844318762071",
            "extra": "mean: 15.177203063493446 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 275144.2964321741,
            "unit": "iter/sec",
            "range": "stddev: 0.000005647068124914914",
            "extra": "mean: 3.6344565850250516 usec\nrounds: 27548"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 226.96418440828205,
            "unit": "iter/sec",
            "range": "stddev: 0.0003307947224020286",
            "extra": "mean: 4.405981510285856 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.968442486150867,
            "unit": "iter/sec",
            "range": "stddev: 0.0033114579093686423",
            "extra": "mean: 45.51984059090263 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.87795144674519,
            "unit": "iter/sec",
            "range": "stddev: 0.0033689270138896658",
            "extra": "mean: 27.87227140000823 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6452879432085359,
            "unit": "iter/sec",
            "range": "stddev: 0.01659520994919329",
            "extra": "mean: 607.7963459999978 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5890022143599457,
            "unit": "iter/sec",
            "range": "stddev: 0.018263893752021844",
            "extra": "mean: 1.6977864864000138 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 35.66726352265488,
            "unit": "iter/sec",
            "range": "stddev: 0.013121635136780774",
            "extra": "mean: 28.036913999999665 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.85304963848759,
            "unit": "iter/sec",
            "range": "stddev: 0.0008236368500762794",
            "extra": "mean: 30.438574531251206 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.3639040536365,
            "unit": "iter/sec",
            "range": "stddev: 0.0014565273133355556",
            "extra": "mean: 14.844745328355373 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.0020197718553499,
            "unit": "iter/sec",
            "range": "stddev: 0.011733803738026955",
            "extra": "mean: 997.984299399991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 15560.46675501403,
            "unit": "iter/sec",
            "range": "stddev: 0.000026522745688214977",
            "extra": "mean: 64.26542440815737 usec\nrounds: 6039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4461.734917866463,
            "unit": "iter/sec",
            "range": "stddev: 0.00007273550027013558",
            "extra": "mean: 224.12806193295447 usec\nrounds: 2422"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "4e090c014437c96a0f7652cb8676439bed19cca9",
          "message": "chore(deps/poetry2nix): update",
          "timestamp": "2022-02-09T02:45:35Z",
          "tree_id": "71483264fbb906e152740e841b66e49377f3c43a",
          "url": "https://github.com/ibis-project/ibis/commit/4e090c014437c96a0f7652cb8676439bed19cca9"
        },
        "date": 1644375453603,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 43.0570853463379,
            "unit": "iter/sec",
            "range": "stddev: 0.015091890858095132",
            "extra": "mean: 23.224981253522127 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 695.2430233945656,
            "unit": "iter/sec",
            "range": "stddev: 0.000053945470414210426",
            "extra": "mean: 1.4383459687483668 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 95.46578158177198,
            "unit": "iter/sec",
            "range": "stddev: 0.00433511519510027",
            "extra": "mean: 10.474957449999422 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 254.60849723586932,
            "unit": "iter/sec",
            "range": "stddev: 0.00011640514443853445",
            "extra": "mean: 3.927598689189073 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 70.5038147470103,
            "unit": "iter/sec",
            "range": "stddev: 0.0004477705920749271",
            "extra": "mean: 14.183629688525539 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 88.89522462556846,
            "unit": "iter/sec",
            "range": "stddev: 0.0001978465245022868",
            "extra": "mean: 11.249198190477099 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8363310482347105,
            "unit": "iter/sec",
            "range": "stddev: 0.006480917399753787",
            "extra": "mean: 1.1956987631999965 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 356490.62566020864,
            "unit": "iter/sec",
            "range": "stddev: 5.493562469100134e-7",
            "extra": "mean: 2.805122850420074 usec\nrounds: 67106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.201676314713903,
            "unit": "iter/sec",
            "range": "stddev: 0.0036143983240945234",
            "extra": "mean: 832.1708497999992 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 249.7930245308286,
            "unit": "iter/sec",
            "range": "stddev: 0.00018507795281794294",
            "extra": "mean: 4.00331435146454 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 306114.6801297346,
            "unit": "iter/sec",
            "range": "stddev: 6.16705142399791e-7",
            "extra": "mean: 3.2667495710306653 usec\nrounds: 25061"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 176.17722039681018,
            "unit": "iter/sec",
            "range": "stddev: 0.00014907595320384762",
            "extra": "mean: 5.676102720588194 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 69.75703193284484,
            "unit": "iter/sec",
            "range": "stddev: 0.00031672876238811586",
            "extra": "mean: 14.335472314285116 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.720081447104526,
            "unit": "iter/sec",
            "range": "stddev: 0.0007463155482401049",
            "extra": "mean: 24.55790765789607 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 37.838000386755034,
            "unit": "iter/sec",
            "range": "stddev: 0.01492782285563366",
            "extra": "mean: 26.428457893616493 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 308454.6074309291,
            "unit": "iter/sec",
            "range": "stddev: 6.352642556482818e-7",
            "extra": "mean: 3.241968107816077 usec\nrounds: 78734"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8365021045220189,
            "unit": "iter/sec",
            "range": "stddev: 0.010223266329697757",
            "extra": "mean: 1.1954542547999978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.12520166159902,
            "unit": "iter/sec",
            "range": "stddev: 0.000934281186353817",
            "extra": "mean: 39.800675571427746 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 73.87567322589426,
            "unit": "iter/sec",
            "range": "stddev: 0.00025450090406864374",
            "extra": "mean: 13.536255662161446 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9419.552495399988,
            "unit": "iter/sec",
            "range": "stddev: 0.000005786590617978837",
            "extra": "mean: 106.16215584427681 usec\nrounds: 6006"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.61126967483296,
            "unit": "iter/sec",
            "range": "stddev: 0.0003436872811663757",
            "extra": "mean: 19.375613239129954 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13313239078649552,
            "unit": "iter/sec",
            "range": "stddev: 0.05483922008176316",
            "extra": "mean: 7.511320078400007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.26570328763577,
            "unit": "iter/sec",
            "range": "stddev: 0.00015181823804785044",
            "extra": "mean: 6.931654421052579 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.16498158933477,
            "unit": "iter/sec",
            "range": "stddev: 0.0008639541751456651",
            "extra": "mean: 23.166927522727832 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9152902061395227,
            "unit": "iter/sec",
            "range": "stddev: 0.003949029672634491",
            "extra": "mean: 522.1140884000079 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 86.64253815006649,
            "unit": "iter/sec",
            "range": "stddev: 0.00013622775298670334",
            "extra": "mean: 11.541674809525796 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 208.33975391024472,
            "unit": "iter/sec",
            "range": "stddev: 0.00015882750248204255",
            "extra": "mean: 4.799852074466845 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 17824.332185390915,
            "unit": "iter/sec",
            "range": "stddev: 0.0006270845629020029",
            "extra": "mean: 56.10308367230805 usec\nrounds: 8354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5598.099085070395,
            "unit": "iter/sec",
            "range": "stddev: 0.000040828934162577496",
            "extra": "mean: 178.6320650641762 usec\nrounds: 3120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.7032937581561587,
            "unit": "iter/sec",
            "range": "stddev: 0.001227392413417696",
            "extra": "mean: 369.91910220000364 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 140.09775082075987,
            "unit": "iter/sec",
            "range": "stddev: 0.00014350645344501345",
            "extra": "mean: 7.137873335878128 msec\nrounds: 131"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "9feabbc51ef8f0645bfcb0405dbc154e6fcf4424",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-09T03:08:52Z",
          "tree_id": "83a116783526f7e6157eabde1581d91e12700d8b",
          "url": "https://github.com/ibis-project/ibis/commit/9feabbc51ef8f0645bfcb0405dbc154e6fcf4424"
        },
        "date": 1644377000910,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.2619566579072816,
            "unit": "iter/sec",
            "range": "stddev: 0.02199346671944253",
            "extra": "mean: 792.4202417999936 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0944797276938885,
            "unit": "iter/sec",
            "range": "stddev: 0.00245858014350164",
            "extra": "mean: 477.44553779999706 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.5828192392203935,
            "unit": "iter/sec",
            "range": "stddev: 0.020510782486359184",
            "extra": "mean: 387.17382339998494 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 37.5177272704315,
            "unit": "iter/sec",
            "range": "stddev: 0.011696053522373576",
            "extra": "mean: 26.654066564104504 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 353055.57754524023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020112595739309014",
            "extra": "mean: 2.832415244514473 usec\nrounds: 32051"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.30813677413038,
            "unit": "iter/sec",
            "range": "stddev: 0.0017682744580238422",
            "extra": "mean: 21.13801278571665 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 344050.62052630633,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023316886794710818",
            "extra": "mean: 2.9065490376685412 usec\nrounds: 75758"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10205563711482962,
            "unit": "iter/sec",
            "range": "stddev: 0.04250833905515847",
            "extra": "mean: 9.79857681819999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 763.7704295101373,
            "unit": "iter/sec",
            "range": "stddev: 0.00029577056579290157",
            "extra": "mean: 1.309293946665851 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 82.11957150776412,
            "unit": "iter/sec",
            "range": "stddev: 0.00105739160763812",
            "extra": "mean: 12.177365050004596 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9404.253738233707,
            "unit": "iter/sec",
            "range": "stddev: 0.00002037432638366583",
            "extra": "mean: 106.33485950452656 usec\nrounds: 363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.66215343840483,
            "unit": "iter/sec",
            "range": "stddev: 0.00042240829789387416",
            "extra": "mean: 6.637366964284297 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 45.384046323937326,
            "unit": "iter/sec",
            "range": "stddev: 0.010667143012668108",
            "extra": "mean: 22.03417458333945 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5509.172011683687,
            "unit": "iter/sec",
            "range": "stddev: 0.000052148814755906584",
            "extra": "mean: 181.51547961821305 usec\nrounds: 3361"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19239.00407757308,
            "unit": "iter/sec",
            "range": "stddev: 0.00001873792986092123",
            "extra": "mean: 51.977742505169516 usec\nrounds: 8039"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 79.04587814239547,
            "unit": "iter/sec",
            "range": "stddev: 0.0009422256849353057",
            "extra": "mean: 12.650881026314513 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 105.42846402188749,
            "unit": "iter/sec",
            "range": "stddev: 0.0005161777350214437",
            "extra": "mean: 9.485104514018103 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 364036.6208637165,
            "unit": "iter/sec",
            "range": "stddev: 0.00000303763177867557",
            "extra": "mean: 2.746976382835856 usec\nrounds: 43104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 285.0940312075864,
            "unit": "iter/sec",
            "range": "stddev: 0.000367002431451115",
            "extra": "mean: 3.507614648276754 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 158.0458283620962,
            "unit": "iter/sec",
            "range": "stddev: 0.0006655492334892463",
            "extra": "mean: 6.327278678364838 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 193.25919962146142,
            "unit": "iter/sec",
            "range": "stddev: 0.00032908504634871963",
            "extra": "mean: 5.174397917194676 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.0121415414728,
            "unit": "iter/sec",
            "range": "stddev: 0.0011281244213315314",
            "extra": "mean: 22.721002999994816 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 241.6850769548877,
            "unit": "iter/sec",
            "range": "stddev: 0.000411814202210236",
            "extra": "mean: 4.137615828827766 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 84.65519828075305,
            "unit": "iter/sec",
            "range": "stddev: 0.0006390489249129079",
            "extra": "mean: 11.812623681815378 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 100.22669181109494,
            "unit": "iter/sec",
            "range": "stddev: 0.004406390242356576",
            "extra": "mean: 9.977382091836155 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 91.52106659766841,
            "unit": "iter/sec",
            "range": "stddev: 0.0007462807480657585",
            "extra": "mean: 10.926446086954542 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.6608343870514982,
            "unit": "iter/sec",
            "range": "stddev: 0.01196444124332972",
            "extra": "mean: 1.5132384445999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.649624041188105,
            "unit": "iter/sec",
            "range": "stddev: 0.002315943120108357",
            "extra": "mean: 28.860341999996802 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.6587840333093592,
            "unit": "iter/sec",
            "range": "stddev: 0.03441147910291608",
            "extra": "mean: 1.5179481430000124 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.543791519998766,
            "unit": "iter/sec",
            "range": "stddev: 0.0020175181081743573",
            "extra": "mean: 36.30582228572012 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 239.0805605973774,
            "unit": "iter/sec",
            "range": "stddev: 0.002241485421700241",
            "extra": "mean: 4.182690543728671 msec\nrounds: 263"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "0e3e02e00000ff85d3450af721c3cf1dfd54d5f7",
          "message": "refactor: remove the csv backend\n\nThe CSV backend is not providing much value over other backends that support CSVs.\n\nBREAKING CHANGE: The CSV backend is removed. Use Datafusion for CSV execution.",
          "timestamp": "2022-02-09T04:27:54-05:00",
          "tree_id": "8879fd4adb7450f77b09ea1df8243233e34cbf28",
          "url": "https://github.com/ibis-project/ibis/commit/0e3e02e00000ff85d3450af721c3cf1dfd54d5f7"
        },
        "date": 1644399152449,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 290.64550636646527,
            "unit": "iter/sec",
            "range": "stddev: 0.00003128118113122133",
            "extra": "mean: 3.440617446667602 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.93797671605507,
            "unit": "iter/sec",
            "range": "stddev: 0.005724707904216047",
            "extra": "mean: 1.066124545400004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.47484575633362,
            "unit": "iter/sec",
            "range": "stddev: 0.0003011067526532146",
            "extra": "mean: 10.81375147826629 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 162.17435754179908,
            "unit": "iter/sec",
            "range": "stddev: 0.00007714277001537877",
            "extra": "mean: 6.166202938354532 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 767.1887398983943,
            "unit": "iter/sec",
            "range": "stddev: 0.000018007711324134746",
            "extra": "mean: 1.3034602151909047 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 82.56185557440985,
            "unit": "iter/sec",
            "range": "stddev: 0.00006161303877954951",
            "extra": "mean: 12.112130874998783 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9293449533099767,
            "unit": "iter/sec",
            "range": "stddev: 0.0025553069903267566",
            "extra": "mean: 1.0760267180000027 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.57781074004551,
            "unit": "iter/sec",
            "range": "stddev: 0.00026922779751408085",
            "extra": "mean: 21.940500953490982 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 268.04302208092525,
            "unit": "iter/sec",
            "range": "stddev: 0.0030129733507170556",
            "extra": "mean: 3.730744386615998 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 237.64782132878221,
            "unit": "iter/sec",
            "range": "stddev: 0.00008770321075061185",
            "extra": "mean: 4.207907290749007 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23749.65391038393,
            "unit": "iter/sec",
            "range": "stddev: 0.000012164009928644848",
            "extra": "mean: 42.10587673291422 usec\nrounds: 6636"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.35619366226677,
            "unit": "iter/sec",
            "range": "stddev: 0.0003578241218555252",
            "extra": "mean: 18.397167509802745 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 106.34798547001483,
            "unit": "iter/sec",
            "range": "stddev: 0.00451573680503048",
            "extra": "mean: 9.403093021277337 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 79.32716652658613,
            "unit": "iter/sec",
            "range": "stddev: 0.00006779541766615703",
            "extra": "mean: 12.606021918920483 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.860040189819244,
            "unit": "iter/sec",
            "range": "stddev: 0.0003717007166690241",
            "extra": "mean: 37.23002619999913 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 329535.25670609175,
            "unit": "iter/sec",
            "range": "stddev: 2.2545491820434775e-7",
            "extra": "mean: 3.0345766641045246 usec\nrounds: 77520"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.747675038923276,
            "unit": "iter/sec",
            "range": "stddev: 0.0011909583727936024",
            "extra": "mean: 22.858357595238555 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 162.72667908595113,
            "unit": "iter/sec",
            "range": "stddev: 0.00006395856079361252",
            "extra": "mean: 6.145273815068805 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6411.344832410572,
            "unit": "iter/sec",
            "range": "stddev: 0.00003347544739435877",
            "extra": "mean: 155.97351665516558 usec\nrounds: 2942"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0845170167673017,
            "unit": "iter/sec",
            "range": "stddev: 0.0026272324419608075",
            "extra": "mean: 479.72743419999233 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14793279634085643,
            "unit": "iter/sec",
            "range": "stddev: 0.04191709435109166",
            "extra": "mean: 6.75982625040001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 379552.7261202782,
            "unit": "iter/sec",
            "range": "stddev: 2.2890882508832555e-7",
            "extra": "mean: 2.634680062034663 usec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.0645761410450296,
            "unit": "iter/sec",
            "range": "stddev: 0.0011421529687100124",
            "extra": "mean: 326.3093994000087 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.81291901848871,
            "unit": "iter/sec",
            "range": "stddev: 0.00015380617712793277",
            "extra": "mean: 10.018743163044519 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 324345.8016829344,
            "unit": "iter/sec",
            "range": "stddev: 2.1132104062923592e-7",
            "extra": "mean: 3.0831291627987656 usec\nrounds: 26455"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3135584116599992,
            "unit": "iter/sec",
            "range": "stddev: 0.004765918933873774",
            "extra": "mean: 761.2908501999982 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 193.05038643179205,
            "unit": "iter/sec",
            "range": "stddev: 0.0001126878638483591",
            "extra": "mean: 5.17999481111278 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10217.018640611697,
            "unit": "iter/sec",
            "range": "stddev: 0.000002634889967817071",
            "extra": "mean: 97.87591029981027 usec\nrounds: 4961"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 36.86589488057354,
            "unit": "iter/sec",
            "range": "stddev: 0.022169843990573226",
            "extra": "mean: 27.12534181631786 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 31.693373269227628,
            "unit": "iter/sec",
            "range": "stddev: 0.028335057867897022",
            "extra": "mean: 31.552337187500967 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.43314506779153,
            "unit": "iter/sec",
            "range": "stddev: 0.0010491047020679469",
            "extra": "mean: 16.0171331896571 msec\nrounds: 58"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "ff34f3e05930da463eae5b98c6ae42b78985415c",
          "message": "refactor(backends): remove the hdf5 backend\n\nRemove the unused hdf5 backend.\n\nBREAKING CHANGE: Read tables with pandas.read_hdf and use the pandas backend",
          "timestamp": "2022-02-09T05:23:18-05:00",
          "tree_id": "8c16d09f21ca6ad4733702b6924873563eb1e9da",
          "url": "https://github.com/ibis-project/ibis/commit/ff34f3e05930da463eae5b98c6ae42b78985415c"
        },
        "date": 1644402881358,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1332266214874216,
            "unit": "iter/sec",
            "range": "stddev: 0.0031742545442639265",
            "extra": "mean: 468.77344860000676 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.74819910862053,
            "unit": "iter/sec",
            "range": "stddev: 0.00024940647189851774",
            "extra": "mean: 6.2209095065773115 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 46.83323784583507,
            "unit": "iter/sec",
            "range": "stddev: 0.0007815302135007874",
            "extra": "mean: 21.35235670213075 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9314203717667198,
            "unit": "iter/sec",
            "range": "stddev: 0.0060105821733266954",
            "extra": "mean: 1.0736290834000102 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9889.127644632868,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043090047091338894",
            "extra": "mean: 101.12115405272684 usec\nrounds: 370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 229.37091809486128,
            "unit": "iter/sec",
            "range": "stddev: 0.00029436003233867885",
            "extra": "mean: 4.359750609649774 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 288.37685559310125,
            "unit": "iter/sec",
            "range": "stddev: 0.00007255404297472522",
            "extra": "mean: 3.46768466541225 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.006093539786521,
            "unit": "iter/sec",
            "range": "stddev: 0.0010134687031463664",
            "extra": "mean: 332.65764580000905 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.11443589282467,
            "unit": "iter/sec",
            "range": "stddev: 0.000033571545029272705",
            "extra": "mean: 6.206768465274039 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14870372249621389,
            "unit": "iter/sec",
            "range": "stddev: 0.029429194723320725",
            "extra": "mean: 6.724781217399993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 80.84073754358486,
            "unit": "iter/sec",
            "range": "stddev: 0.00003206438397739483",
            "extra": "mean: 12.370000947367101 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 76.02948861582269,
            "unit": "iter/sec",
            "range": "stddev: 0.000419247658899253",
            "extra": "mean: 13.152791347223236 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 80.25470054368317,
            "unit": "iter/sec",
            "range": "stddev: 0.0003767261331436369",
            "extra": "mean: 12.460329341777225 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 321986.51143167325,
            "unit": "iter/sec",
            "range": "stddev: 2.900299055866239e-7",
            "extra": "mean: 3.10572016061674 usec\nrounds: 86957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 192.94517433207614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000987277597861788",
            "extra": "mean: 5.18281943801771 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.13664155528775,
            "unit": "iter/sec",
            "range": "stddev: 0.0002931458917468308",
            "extra": "mean: 17.501903730767218 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 316320.9786285604,
            "unit": "iter/sec",
            "range": "stddev: 2.180246808386678e-7",
            "extra": "mean: 3.1613458087275617 usec\nrounds: 27174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23161.09005963164,
            "unit": "iter/sec",
            "range": "stddev: 0.00001878748249812629",
            "extra": "mean: 43.17586078312172 usec\nrounds: 6515"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.225676719718546,
            "unit": "iter/sec",
            "range": "stddev: 0.000506881562558491",
            "extra": "mean: 35.4287342666756 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 389965.6450846972,
            "unit": "iter/sec",
            "range": "stddev: 1.4930104370771322e-7",
            "extra": "mean: 2.5643284545817076 usec\nrounds: 71943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.19354035997715,
            "unit": "iter/sec",
            "range": "stddev: 0.0002804992845194961",
            "extra": "mean: 21.648048454550082 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 38.64428038561508,
            "unit": "iter/sec",
            "range": "stddev: 0.016991067557877895",
            "extra": "mean: 25.877050627451695 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.914273436648792,
            "unit": "iter/sec",
            "range": "stddev: 0.00235480769682683",
            "extra": "mean: 1.093764687800001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3099953120193364,
            "unit": "iter/sec",
            "range": "stddev: 0.003963337926677718",
            "extra": "mean: 763.3615104 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6261.288898853982,
            "unit": "iter/sec",
            "range": "stddev: 0.000037081048565669864",
            "extra": "mean: 159.7115252393213 usec\nrounds: 2833"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.73125965881145,
            "unit": "iter/sec",
            "range": "stddev: 0.00022124728046747806",
            "extra": "mean: 10.44590871951361 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 111.4879787784957,
            "unit": "iter/sec",
            "range": "stddev: 0.0005197054569311739",
            "extra": "mean: 8.969576908258421 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 777.4203923144157,
            "unit": "iter/sec",
            "range": "stddev: 0.00002246781762033802",
            "extra": "mean: 1.28630533735159 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 252.50094005453843,
            "unit": "iter/sec",
            "range": "stddev: 0.0003234074005325472",
            "extra": "mean: 3.96038129515085 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 37.835219994576235,
            "unit": "iter/sec",
            "range": "stddev: 0.020340295624630467",
            "extra": "mean: 26.430400038465542 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.36043349992771,
            "unit": "iter/sec",
            "range": "stddev: 0.00018159227766411005",
            "extra": "mean: 9.96408609574928 msec\nrounds: 94"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "0591fd27631b8613a2afe8080934784646a487e0",
          "message": "chore(conda-lock): relock",
          "timestamp": "2022-02-09T11:28:34-05:00",
          "tree_id": "f178ed930ca991616f6d9a0c7ac4154f0e1dca7b",
          "url": "https://github.com/ibis-project/ibis/commit/0591fd27631b8613a2afe8080934784646a487e0"
        },
        "date": 1644424383532,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 321359.9800627737,
            "unit": "iter/sec",
            "range": "stddev: 1.9504722627026978e-7",
            "extra": "mean: 3.1117751494901835 usec\nrounds: 10527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10553.884901949064,
            "unit": "iter/sec",
            "range": "stddev: 0.000002585077876150359",
            "extra": "mean: 94.75183871062708 usec\nrounds: 372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 765.9053537408587,
            "unit": "iter/sec",
            "range": "stddev: 0.000018311384021358137",
            "extra": "mean: 1.305644352942265 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 234.0245203574427,
            "unit": "iter/sec",
            "range": "stddev: 0.0002799249229106583",
            "extra": "mean: 4.273056509089847 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 83.30928654166861,
            "unit": "iter/sec",
            "range": "stddev: 0.000056709520853295554",
            "extra": "mean: 12.003463737501008 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.512908157750722,
            "unit": "iter/sec",
            "range": "stddev: 0.0005604530434558836",
            "extra": "mean: 36.34657573333584 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 101.37724641010142,
            "unit": "iter/sec",
            "range": "stddev: 0.00013655028132055497",
            "extra": "mean: 9.864146397848485 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 162.84454457647016,
            "unit": "iter/sec",
            "range": "stddev: 0.00004127240140551591",
            "extra": "mean: 6.14082591836787 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 295.4876706250458,
            "unit": "iter/sec",
            "range": "stddev: 0.000010243479527164487",
            "extra": "mean: 3.3842359577463847 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 384086.5052479503,
            "unit": "iter/sec",
            "range": "stddev: 1.505789378168394e-7",
            "extra": "mean: 2.6035801475358826 usec\nrounds: 83334"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 41.01396973959857,
            "unit": "iter/sec",
            "range": "stddev: 0.014773835061891947",
            "extra": "mean: 24.381936358491778 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.78378304472113,
            "unit": "iter/sec",
            "range": "stddev: 0.00009723057941535045",
            "extra": "mean: 6.105610588607238 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.08410863895924,
            "unit": "iter/sec",
            "range": "stddev: 0.0000701452941344476",
            "extra": "mean: 10.092435747126522 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9345695950028212,
            "unit": "iter/sec",
            "range": "stddev: 0.0015210846602512428",
            "extra": "mean: 1.0700112707999891 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14880250240844503,
            "unit": "iter/sec",
            "range": "stddev: 0.017832191560407704",
            "extra": "mean: 6.720317090200001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 323022.5229261219,
            "unit": "iter/sec",
            "range": "stddev: 1.8927524027347266e-7",
            "extra": "mean: 3.095759363593073 usec\nrounds: 73530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23017.507814002987,
            "unit": "iter/sec",
            "range": "stddev: 0.000011730361809718063",
            "extra": "mean: 43.44518998671253 usec\nrounds: 6132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 78.81823819181645,
            "unit": "iter/sec",
            "range": "stddev: 0.0002593744636065999",
            "extra": "mean: 12.687418837837308 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.100324959579666,
            "unit": "iter/sec",
            "range": "stddev: 0.0002793235484935195",
            "extra": "mean: 17.21160769230979 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 81.11050804261247,
            "unit": "iter/sec",
            "range": "stddev: 0.0000317105060863975",
            "extra": "mean: 12.328858789475673 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.40146014765874,
            "unit": "iter/sec",
            "range": "stddev: 0.0006150262346814619",
            "extra": "mean: 21.55104595454108 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 106.63903863951268,
            "unit": "iter/sec",
            "range": "stddev: 0.005452403160768734",
            "extra": "mean: 9.377428873683344 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6322.119936041772,
            "unit": "iter/sec",
            "range": "stddev: 0.00003790062099362288",
            "extra": "mean: 158.174791069543 usec\nrounds: 4121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.111554400424964,
            "unit": "iter/sec",
            "range": "stddev: 0.0020556899296487806",
            "extra": "mean: 473.5847675999935 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 278.8584601175745,
            "unit": "iter/sec",
            "range": "stddev: 0.00011936769029690678",
            "extra": "mean: 3.586048634057479 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 36.87853600315089,
            "unit": "iter/sec",
            "range": "stddev: 0.02209734656903645",
            "extra": "mean: 27.11604386666977 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 49.26107567257461,
            "unit": "iter/sec",
            "range": "stddev: 0.0006562673697847546",
            "extra": "mean: 20.300003326089275 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 194.66101016709192,
            "unit": "iter/sec",
            "range": "stddev: 0.00008923905220105689",
            "extra": "mean: 5.137135572971835 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.0620471712594033,
            "unit": "iter/sec",
            "range": "stddev: 0.0015464941830208364",
            "extra": "mean: 326.5789009999821 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.932664586461515,
            "unit": "iter/sec",
            "range": "stddev: 0.0035525906361810254",
            "extra": "mean: 1.0721968160000075 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.314024612068903,
            "unit": "iter/sec",
            "range": "stddev: 0.0032649122851643813",
            "extra": "mean: 761.020753199989 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "cf47bb33034e3f5439746343b086342f14614353",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-10T01:12:32Z",
          "tree_id": "50880c598e7ee5aecb7a9a9ea4f9f68cfac776b8",
          "url": "https://github.com/ibis-project/ibis/commit/cf47bb33034e3f5439746343b086342f14614353"
        },
        "date": 1644455704625,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 291299.41150593804,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031235687861676635",
            "extra": "mean: 3.43289399326375 usec\nrounds: 28734"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13106278764117674,
            "unit": "iter/sec",
            "range": "stddev: 0.11513214808382576",
            "extra": "mean: 7.629930798800013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8339782318814833,
            "unit": "iter/sec",
            "range": "stddev: 0.03553468211111724",
            "extra": "mean: 1.1990720642000041 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 171.5791665573383,
            "unit": "iter/sec",
            "range": "stddev: 0.00021683117995213052",
            "extra": "mean: 5.82821341346136 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 83.21756625624661,
            "unit": "iter/sec",
            "range": "stddev: 0.00035562964535712304",
            "extra": "mean: 12.016693650001287 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 304577.5454672548,
            "unit": "iter/sec",
            "range": "stddev: 7.916130867359905e-7",
            "extra": "mean: 3.28323612453404 usec\nrounds: 24936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.40682354236614,
            "unit": "iter/sec",
            "range": "stddev: 0.0009876785104596336",
            "extra": "mean: 15.058693469384531 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 22352.597432218394,
            "unit": "iter/sec",
            "range": "stddev: 0.000016297710269690285",
            "extra": "mean: 44.73753008044733 usec\nrounds: 6333"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.29945971192686,
            "unit": "iter/sec",
            "range": "stddev: 0.0006463822063938142",
            "extra": "mean: 13.64266536111024 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 39.04212019866356,
            "unit": "iter/sec",
            "range": "stddev: 0.017466687577139737",
            "extra": "mean: 25.61336307842807 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5914.002440930875,
            "unit": "iter/sec",
            "range": "stddev: 0.00004913459301556962",
            "extra": "mean: 169.09022442719825 usec\nrounds: 2923"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 259.88866364306796,
            "unit": "iter/sec",
            "range": "stddev: 0.00025061325744415823",
            "extra": "mean: 3.847801539252223 msec\nrounds: 293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 146.73172329800255,
            "unit": "iter/sec",
            "range": "stddev: 0.00037028372466129707",
            "extra": "mean: 6.8151588322115275 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.27665917378949,
            "unit": "iter/sec",
            "range": "stddev: 0.0011171010935331575",
            "extra": "mean: 26.125582054056714 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 147.74841721959723,
            "unit": "iter/sec",
            "range": "stddev: 0.0002710501540742759",
            "extra": "mean: 6.7682620147037404 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.1576283064696224,
            "unit": "iter/sec",
            "range": "stddev: 0.014198534261204172",
            "extra": "mean: 863.8351311999827 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 663.021006834194,
            "unit": "iter/sec",
            "range": "stddev: 0.000035397364303335694",
            "extra": "mean: 1.508247837839739 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.068017061674134,
            "unit": "iter/sec",
            "range": "stddev: 0.0009011463581945576",
            "extra": "mean: 24.957561500005454 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.7363635433919526,
            "unit": "iter/sec",
            "range": "stddev: 0.005180675301626729",
            "extra": "mean: 365.4485174000001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 271.26589774958495,
            "unit": "iter/sec",
            "range": "stddev: 0.00013795526944039007",
            "extra": "mean: 3.686419886524531 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10026.459357250258,
            "unit": "iter/sec",
            "range": "stddev: 0.000008181347637254153",
            "extra": "mean: 99.73610467755873 usec\nrounds: 5388"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9215709849398117,
            "unit": "iter/sec",
            "range": "stddev: 0.0014759554951414816",
            "extra": "mean: 520.4075247999867 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.429160233488886,
            "unit": "iter/sec",
            "range": "stddev: 0.0005966764468263152",
            "extra": "mean: 22.012293312497395 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 210.7066684461182,
            "unit": "iter/sec",
            "range": "stddev: 0.00010921291240763867",
            "extra": "mean: 4.745934276188889 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 71.43578562946185,
            "unit": "iter/sec",
            "range": "stddev: 0.0002952681015809731",
            "extra": "mean: 13.998586159421697 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.55110639836117,
            "unit": "iter/sec",
            "range": "stddev: 0.0004020067050991148",
            "extra": "mean: 11.688919548785124 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.8446259007585,
            "unit": "iter/sec",
            "range": "stddev: 0.005816401130619662",
            "extra": "mean: 10.65591119791461 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 374126.5865758998,
            "unit": "iter/sec",
            "range": "stddev: 8.349939766044228e-7",
            "extra": "mean: 2.6728921062580726 usec\nrounds: 64508"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.829498087817943,
            "unit": "iter/sec",
            "range": "stddev: 0.01053494694124951",
            "extra": "mean: 1.205548288400007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 29.681997947208476,
            "unit": "iter/sec",
            "range": "stddev: 0.02873151567789959",
            "extra": "mean: 33.69045445588166 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.75701857916768,
            "unit": "iter/sec",
            "range": "stddev: 0.001082425615391159",
            "extra": "mean: 43.942487304352944 msec\nrounds: 23"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "30cd9904ff20ec7fbed8b2dc9d4d55624ff23dbb",
          "message": "test: shorten new marker names\n\n`backends_notimpl` -> `notimpl`\n`backends_notyet` -> `notyet`\n`backends_never` -> `never`",
          "timestamp": "2022-02-10T08:58:44-05:00",
          "tree_id": "c5f3d9a9b3a22c0b07dcd22c951a8a2ab3be56a0",
          "url": "https://github.com/ibis-project/ibis/commit/30cd9904ff20ec7fbed8b2dc9d4d55624ff23dbb"
        },
        "date": 1644501955978,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08185775300392728,
            "unit": "iter/sec",
            "range": "stddev: 0.18068757899414373",
            "extra": "mean: 12.216313828599999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.470110959447276,
            "unit": "iter/sec",
            "range": "stddev: 0.013644461738809203",
            "extra": "mean: 680.2207640000006 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 30.59450998608554,
            "unit": "iter/sec",
            "range": "stddev: 0.0020924781664154834",
            "extra": "mean: 32.685602758625734 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 189.02892085964186,
            "unit": "iter/sec",
            "range": "stddev: 0.0005958022602381972",
            "extra": "mean: 5.290195783017362 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 66.34408850862424,
            "unit": "iter/sec",
            "range": "stddev: 0.0009657479795730677",
            "extra": "mean: 15.072932984375953 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 56.626522803367635,
            "unit": "iter/sec",
            "range": "stddev: 0.001258378662005208",
            "extra": "mean: 17.659569235293556 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 27.06722483434564,
            "unit": "iter/sec",
            "range": "stddev: 0.001794432080346108",
            "extra": "mean: 36.94505092857168 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 66.87159675022917,
            "unit": "iter/sec",
            "range": "stddev: 0.009998444794991287",
            "extra": "mean: 14.954032034483651 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 27.073418314308995,
            "unit": "iter/sec",
            "range": "stddev: 0.0017058959790530947",
            "extra": "mean: 36.936599153845094 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 26.089307487375088,
            "unit": "iter/sec",
            "range": "stddev: 0.022024812087040373",
            "extra": "mean: 38.32987903124341 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5328119265373527,
            "unit": "iter/sec",
            "range": "stddev: 0.05269949978848847",
            "extra": "mean: 1.876834864600005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.522287508629703,
            "unit": "iter/sec",
            "range": "stddev: 0.01667218627289856",
            "extra": "mean: 1.9146542535999855 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 97.55669486230232,
            "unit": "iter/sec",
            "range": "stddev: 0.0053024543491723",
            "extra": "mean: 10.250449765764031 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 118.59140235426129,
            "unit": "iter/sec",
            "range": "stddev: 0.0010309394685015351",
            "extra": "mean: 8.43231448611053 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 54.76637076977868,
            "unit": "iter/sec",
            "range": "stddev: 0.001685718059233558",
            "extra": "mean: 18.259380454543876 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8518006370482971,
            "unit": "iter/sec",
            "range": "stddev: 0.035804672963751255",
            "extra": "mean: 1.1739836254000124 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3668.6056406690773,
            "unit": "iter/sec",
            "range": "stddev: 0.00016061496113775947",
            "extra": "mean: 272.58312774594674 usec\nrounds: 2458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 238065.48220772072,
            "unit": "iter/sec",
            "range": "stddev: 0.000011062676531650393",
            "extra": "mean: 4.200524959462473 usec\nrounds: 50762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 23.544239994762442,
            "unit": "iter/sec",
            "range": "stddev: 0.029995865510734836",
            "extra": "mean: 42.47323337777971 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 56.512598137205366,
            "unit": "iter/sec",
            "range": "stddev: 0.0017280474676705628",
            "extra": "mean: 17.695169448272896 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 15.370945529803446,
            "unit": "iter/sec",
            "range": "stddev: 0.007919366136013947",
            "extra": "mean: 65.05780650000048 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 96.78488020670893,
            "unit": "iter/sec",
            "range": "stddev: 0.0016821635076839832",
            "extra": "mean: 10.332192361701988 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 5803.479053870877,
            "unit": "iter/sec",
            "range": "stddev: 0.00009808578130087588",
            "extra": "mean: 172.31043495074005 usec\nrounds: 4658"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 465.1365112598711,
            "unit": "iter/sec",
            "range": "stddev: 0.0007076448651391721",
            "extra": "mean: 2.1499064807692583 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 265641.7940847902,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067354696339045605",
            "extra": "mean: 3.7644678746628624 usec\nrounds: 54645"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.42488141952922,
            "unit": "iter/sec",
            "range": "stddev: 0.003321183695028011",
            "extra": "mean: 20.23272431372735 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11569.570156167343,
            "unit": "iter/sec",
            "range": "stddev: 0.00010937959750242628",
            "extra": "mean: 86.43363465555669 usec\nrounds: 4738"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 141.95880034358566,
            "unit": "iter/sec",
            "range": "stddev: 0.001588424341826348",
            "extra": "mean: 7.044297342466127 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8898154486889729,
            "unit": "iter/sec",
            "range": "stddev: 0.036017726876251564",
            "extra": "mean: 529.1521988000113 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 161.76288918324275,
            "unit": "iter/sec",
            "range": "stddev: 0.0011425927218177748",
            "extra": "mean: 6.181887607529154 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 234264.17440646538,
            "unit": "iter/sec",
            "range": "stddev: 0.000007633929431391541",
            "extra": "mean: 4.268685139473897 usec\nrounds: 22321"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "0afd138122f73da3addbb73635d67ce77f4d2960",
          "message": "chore: drop support for Python 3.7\n\nThis commit drops support for Python 3.7 in ibis\n\nBREAKING CHANGE: The minimum supported Python version is now Python 3.8",
          "timestamp": "2022-02-10T12:09:02-05:00",
          "tree_id": "764472a571e0aa710abd2c6c5b941b636b4db09f",
          "url": "https://github.com/ibis-project/ibis/commit/0afd138122f73da3addbb73635d67ce77f4d2960"
        },
        "date": 1644513468013,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 54.30103243456293,
            "unit": "iter/sec",
            "range": "stddev: 0.000376553552309748",
            "extra": "mean: 18.41585611111685 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 169.61846518131068,
            "unit": "iter/sec",
            "range": "stddev: 0.00012679828701343894",
            "extra": "mean: 5.895584533977876 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.12866957639569787,
            "unit": "iter/sec",
            "range": "stddev: 0.13110790758574492",
            "extra": "mean: 7.771844969200004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 644.4011998060532,
            "unit": "iter/sec",
            "range": "stddev: 0.000034852607372311846",
            "extra": "mean: 1.551828271426205 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8032149761511593,
            "unit": "iter/sec",
            "range": "stddev: 0.007035552455552431",
            "extra": "mean: 1.2449967066000114 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.77482598006461,
            "unit": "iter/sec",
            "range": "stddev: 0.0005475947196943288",
            "extra": "mean: 25.14153048717815 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8135609267400802,
            "unit": "iter/sec",
            "range": "stddev: 0.004882369725804125",
            "extra": "mean: 1.2291642421999995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8817710901169387,
            "unit": "iter/sec",
            "range": "stddev: 0.006153381159414449",
            "extra": "mean: 531.4142645999823 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 313551.37428350496,
            "unit": "iter/sec",
            "range": "stddev: 5.874927213482482e-7",
            "extra": "mean: 3.1892700272326864 usec\nrounds: 51280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5644.472594562229,
            "unit": "iter/sec",
            "range": "stddev: 0.0000406033513648423",
            "extra": "mean: 177.16447077152608 usec\nrounds: 2566"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 20827.145525351378,
            "unit": "iter/sec",
            "range": "stddev: 0.000021584905388081905",
            "extra": "mean: 48.014260945302 usec\nrounds: 5139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 145.87913165441938,
            "unit": "iter/sec",
            "range": "stddev: 0.00016724063444351582",
            "extra": "mean: 6.854990077463251 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.955261522448076,
            "unit": "iter/sec",
            "range": "stddev: 0.0013451717684686425",
            "extra": "mean: 24.416887179487006 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.1621747464101886,
            "unit": "iter/sec",
            "range": "stddev: 0.0024696472988278003",
            "extra": "mean: 860.4557989999989 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 32.67238922692744,
            "unit": "iter/sec",
            "range": "stddev: 0.02335190952265364",
            "extra": "mean: 30.606883171428276 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.58451341850322,
            "unit": "iter/sec",
            "range": "stddev: 0.0002638416958404776",
            "extra": "mean: 11.684356901231173 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.383882499764002,
            "unit": "iter/sec",
            "range": "stddev: 0.0007242958425569359",
            "extra": "mean: 41.010696307681044 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 309089.0063990525,
            "unit": "iter/sec",
            "range": "stddev: 7.294412882680549e-7",
            "extra": "mean: 3.2353140334889163 usec\nrounds: 65786"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 310475.22936982685,
            "unit": "iter/sec",
            "range": "stddev: 6.634168569881337e-7",
            "extra": "mean: 3.220868866188472 usec\nrounds: 23640"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9468.718139347651,
            "unit": "iter/sec",
            "range": "stddev: 0.0000074290889446534",
            "extra": "mean: 105.6109164179741 usec\nrounds: 335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 270.7974183351437,
            "unit": "iter/sec",
            "range": "stddev: 0.0001084045199963849",
            "extra": "mean: 3.6927973913044556 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 82.26243234958301,
            "unit": "iter/sec",
            "range": "stddev: 0.00033155602089655147",
            "extra": "mean: 12.156217260272502 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.484532734986296,
            "unit": "iter/sec",
            "range": "stddev: 0.0009815508185264297",
            "extra": "mean: 16.003960599997907 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 101.75615720120062,
            "unit": "iter/sec",
            "range": "stddev: 0.0006208593011122035",
            "extra": "mean: 9.827415141304108 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 233.8854011985538,
            "unit": "iter/sec",
            "range": "stddev: 0.003853349933727888",
            "extra": "mean: 4.275598198414547 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.76671476304555,
            "unit": "iter/sec",
            "range": "stddev: 0.0005695320331576947",
            "extra": "mean: 20.505789755552286 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 214.70841995389856,
            "unit": "iter/sec",
            "range": "stddev: 0.00015515907192865616",
            "extra": "mean: 4.6574791999993135 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 139.21153249716463,
            "unit": "iter/sec",
            "range": "stddev: 0.000152293824283276",
            "extra": "mean: 7.183312920000844 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 74.79655555045272,
            "unit": "iter/sec",
            "range": "stddev: 0.00022629552614919518",
            "extra": "mean: 13.36959961111401 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.6735818983671233,
            "unit": "iter/sec",
            "range": "stddev: 0.004051889058920661",
            "extra": "mean: 374.03006079998704 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 35.24721914861619,
            "unit": "iter/sec",
            "range": "stddev: 0.01994229566254175",
            "extra": "mean: 28.371032499999654 msec\nrounds: 48"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "5aa7bfa2eaddddd936801dadcb80c694c401538b",
          "message": "test: remove dead fixtures",
          "timestamp": "2022-02-10T13:38:29-05:00",
          "tree_id": "ff76ddb0a2a28c36887bc3d180f0c299ea46af63",
          "url": "https://github.com/ibis-project/ibis/commit/5aa7bfa2eaddddd936801dadcb80c694c401538b"
        },
        "date": 1644518772055,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 623.2377746907024,
            "unit": "iter/sec",
            "range": "stddev: 0.0001883813624262389",
            "extra": "mean: 1.6045240526318794 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.11985146041557229,
            "unit": "iter/sec",
            "range": "stddev: 0.33827630242970724",
            "extra": "mean: 8.343661366600003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 33.65885714857247,
            "unit": "iter/sec",
            "range": "stddev: 0.02363337573948418",
            "extra": "mean: 29.709861971425003 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8529471268396753,
            "unit": "iter/sec",
            "range": "stddev: 0.002977842800528122",
            "extra": "mean: 539.6808066000062 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 55.435490352392414,
            "unit": "iter/sec",
            "range": "stddev: 0.0007740194459464802",
            "extra": "mean: 18.038985380001122 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 241.41112138500424,
            "unit": "iter/sec",
            "range": "stddev: 0.00014390072350407162",
            "extra": "mean: 4.142311233479557 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 45.668565781245576,
            "unit": "iter/sec",
            "range": "stddev: 0.0006379417757260852",
            "extra": "mean: 21.896899604643675 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 331883.9699373802,
            "unit": "iter/sec",
            "range": "stddev: 2.8599295319838687e-7",
            "extra": "mean: 3.013101235918926 usec\nrounds: 50249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 141.24465335697943,
            "unit": "iter/sec",
            "range": "stddev: 0.0000873254815889652",
            "extra": "mean: 7.079914009011134 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 301588.7097559118,
            "unit": "iter/sec",
            "range": "stddev: 2.950610461016954e-7",
            "extra": "mean: 3.3157739917032747 usec\nrounds: 65356"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 67.45780136127591,
            "unit": "iter/sec",
            "range": "stddev: 0.00012252353384515637",
            "extra": "mean: 14.82408231250254 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.581920634081347,
            "unit": "iter/sec",
            "range": "stddev: 0.0020435840005927778",
            "extra": "mean: 387.30857440000364 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.594936062224587,
            "unit": "iter/sec",
            "range": "stddev: 0.0006035813753630825",
            "extra": "mean: 44.257704347827435 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 70.15889595372062,
            "unit": "iter/sec",
            "range": "stddev: 0.00025936338899513984",
            "extra": "mean: 14.253359982455207 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.528871207249395,
            "unit": "iter/sec",
            "range": "stddev: 0.0006777435514527599",
            "extra": "mean: 27.37560638888681 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19947.726091411936,
            "unit": "iter/sec",
            "range": "stddev: 0.000019072064240106723",
            "extra": "mean: 50.131027236760005 usec\nrounds: 5801"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 79.4017033603501,
            "unit": "iter/sec",
            "range": "stddev: 0.00025848788192270816",
            "extra": "mean: 12.594188256411616 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.2428985552125,
            "unit": "iter/sec",
            "range": "stddev: 0.0003136452570710814",
            "extra": "mean: 12.619427333330693 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 258.8393429729974,
            "unit": "iter/sec",
            "range": "stddev: 0.00006619496027715641",
            "extra": "mean: 3.863400318182395 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 90.64266588594903,
            "unit": "iter/sec",
            "range": "stddev: 0.006530370253319065",
            "extra": "mean: 11.032332182928602 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7855098872551389,
            "unit": "iter/sec",
            "range": "stddev: 0.007384294187496938",
            "extra": "mean: 1.27305845059999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 158.2917346725396,
            "unit": "iter/sec",
            "range": "stddev: 0.004905384764848622",
            "extra": "mean: 6.317449246915604 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 208.76649918015406,
            "unit": "iter/sec",
            "range": "stddev: 0.00012664670733616377",
            "extra": "mean: 4.790040566504182 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 37.4074148856913,
            "unit": "iter/sec",
            "range": "stddev: 0.01778365802710001",
            "extra": "mean: 26.73266792307826 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9339.529955073524,
            "unit": "iter/sec",
            "range": "stddev: 0.000025868431438813397",
            "extra": "mean: 107.07176965118774 usec\nrounds: 4936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5394.691041646669,
            "unit": "iter/sec",
            "range": "stddev: 0.0000518228044310131",
            "extra": "mean: 185.36742739854128 usec\nrounds: 2679"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 135.45360520961938,
            "unit": "iter/sec",
            "range": "stddev: 0.00010451404850619836",
            "extra": "mean: 7.38260158120165 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 299504.03251602757,
            "unit": "iter/sec",
            "range": "stddev: 4.777716989830783e-7",
            "extra": "mean: 3.338853208750992 usec\nrounds: 23639"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.238096351567805,
            "unit": "iter/sec",
            "range": "stddev: 0.0004649429610468174",
            "extra": "mean: 26.15192949998932 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7927091084547034,
            "unit": "iter/sec",
            "range": "stddev: 0.011548501510140917",
            "extra": "mean: 1.2614967954000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.1417121112994426,
            "unit": "iter/sec",
            "range": "stddev: 0.00454448466672087",
            "extra": "mean: 875.8775439999908 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "565f42f232891797b2c510f206718ffd18acd6a4",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-11T02:40:26Z",
          "tree_id": "2c2afa65440d6882429b7c57eaacfda21680d5f7",
          "url": "https://github.com/ibis-project/ibis/commit/565f42f232891797b2c510f206718ffd18acd6a4"
        },
        "date": 1644547918529,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.2040604720171757,
            "unit": "iter/sec",
            "range": "stddev: 0.013194532844084133",
            "extra": "mean: 453.70805960001235 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 623.6847727837749,
            "unit": "iter/sec",
            "range": "stddev: 0.0001789460683226929",
            "extra": "mean: 1.603374081968632 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 156.88507703154914,
            "unit": "iter/sec",
            "range": "stddev: 0.0006833640294230899",
            "extra": "mean: 6.374092545455442 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5735858912237949,
            "unit": "iter/sec",
            "range": "stddev: 0.019738726606736746",
            "extra": "mean: 1.7434180569999966 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 69.67614721341648,
            "unit": "iter/sec",
            "range": "stddev: 0.0013728396959666127",
            "extra": "mean: 14.352113886794319 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.21788355360825,
            "unit": "iter/sec",
            "range": "stddev: 0.0016067675797261914",
            "extra": "mean: 24.261313628570797 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16431.519063758013,
            "unit": "iter/sec",
            "range": "stddev: 0.000023683727960987002",
            "extra": "mean: 60.8586458817212 usec\nrounds: 3448"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 306201.2957970149,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027675835097206173",
            "extra": "mean: 3.265825500173304 usec\nrounds: 18149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 254.4511979568743,
            "unit": "iter/sec",
            "range": "stddev: 0.00031276133330107245",
            "extra": "mean: 3.9300266928571705 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 80.88455272917486,
            "unit": "iter/sec",
            "range": "stddev: 0.0005798160854106421",
            "extra": "mean: 12.363300114278836 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5901646533203041,
            "unit": "iter/sec",
            "range": "stddev: 0.02725641740902174",
            "extra": "mean: 1.6944423804000053 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 364014.6134549755,
            "unit": "iter/sec",
            "range": "stddev: 0.000005428425353034859",
            "extra": "mean: 2.747142458124662 usec\nrounds: 64103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09198866753462477,
            "unit": "iter/sec",
            "range": "stddev: 0.09627425959844658",
            "extra": "mean: 10.87090428419998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.0447154344718452,
            "unit": "iter/sec",
            "range": "stddev: 0.014378574846512181",
            "extra": "mean: 957.1984551999549 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.46875072924018,
            "unit": "iter/sec",
            "range": "stddev: 0.0006441670276372662",
            "extra": "mean: 10.58551099999333 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 323572.22234608914,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027326093334377193",
            "extra": "mean: 3.090500144757208 usec\nrounds: 68966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 37.082457210065336,
            "unit": "iter/sec",
            "range": "stddev: 0.01574516997599309",
            "extra": "mean: 26.966929250000423 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 209.8020335760021,
            "unit": "iter/sec",
            "range": "stddev: 0.0005828423166582353",
            "extra": "mean: 4.766398032256173 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 73.36374087927021,
            "unit": "iter/sec",
            "range": "stddev: 0.0005868610928500339",
            "extra": "mean: 13.63071168420423 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.203652835714077,
            "unit": "iter/sec",
            "range": "stddev: 0.0025623051706381563",
            "extra": "mean: 43.0966627142793 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4675.742710759772,
            "unit": "iter/sec",
            "range": "stddev: 0.00006439846715076003",
            "extra": "mean: 213.86976612267608 usec\nrounds: 2698"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.7276612990622673,
            "unit": "iter/sec",
            "range": "stddev: 0.012735907105338446",
            "extra": "mean: 578.8171561999889 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 32.691932933523915,
            "unit": "iter/sec",
            "range": "stddev: 0.0009770158983476865",
            "extra": "mean: 30.58858593749747 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 229.745787623099,
            "unit": "iter/sec",
            "range": "stddev: 0.0003764706335558775",
            "extra": "mean: 4.352636931217703 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 34.55337029700677,
            "unit": "iter/sec",
            "range": "stddev: 0.017985453206454456",
            "extra": "mean: 28.940736935482853 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8884.459561982201,
            "unit": "iter/sec",
            "range": "stddev: 0.000030249909300145187",
            "extra": "mean: 112.55608661658326 usec\nrounds: 5380"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 90.25765470836387,
            "unit": "iter/sec",
            "range": "stddev: 0.005198992545746419",
            "extra": "mean: 11.079392692300184 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 76.72051132218236,
            "unit": "iter/sec",
            "range": "stddev: 0.0008638157941836914",
            "extra": "mean: 13.034323973683788 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.9391856805801,
            "unit": "iter/sec",
            "range": "stddev: 0.0005004193950827576",
            "extra": "mean: 6.947378472872085 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 138.0659317289933,
            "unit": "iter/sec",
            "range": "stddev: 0.0003571804961963979",
            "extra": "mean: 7.242916391299766 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 44.85566027815991,
            "unit": "iter/sec",
            "range": "stddev: 0.001140455812880606",
            "extra": "mean: 22.293730463419283 msec\nrounds: 41"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gerrymanoim@gmail.com",
            "name": "gerrymanoim",
            "username": "gerrymanoim"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "985c2423708d9855a227f0eaf5ade1d326064eab",
          "message": "perf: use assign instead of concat in projections when possible",
          "timestamp": "2022-02-11T10:49:46-05:00",
          "tree_id": "717fab3f8c943be1270a21e4db403ab2f2e4e0f0",
          "url": "https://github.com/ibis-project/ibis/commit/985c2423708d9855a227f0eaf5ade1d326064eab"
        },
        "date": 1644595022962,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 178.8183954305143,
            "unit": "iter/sec",
            "range": "stddev: 0.004579921761482216",
            "extra": "mean: 5.592265815787294 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 155.53354462750434,
            "unit": "iter/sec",
            "range": "stddev: 0.004144537568486825",
            "extra": "mean: 6.4294811925938795 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6242.828574158356,
            "unit": "iter/sec",
            "range": "stddev: 0.000040340313626685484",
            "extra": "mean: 160.18379939814665 usec\nrounds: 2991"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23151.802345266176,
            "unit": "iter/sec",
            "range": "stddev: 0.000013980959740671887",
            "extra": "mean: 43.19318146755296 usec\nrounds: 6486"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 290.179142183116,
            "unit": "iter/sec",
            "range": "stddev: 0.00009897103808074148",
            "extra": "mean: 3.4461470678997155 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3170667629513533,
            "unit": "iter/sec",
            "range": "stddev: 0.0032197918619252426",
            "extra": "mean: 759.2629531999933 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.34473079640503,
            "unit": "iter/sec",
            "range": "stddev: 0.0020184789179723247",
            "extra": "mean: 24.18687897435654 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 240.76123527782988,
            "unit": "iter/sec",
            "range": "stddev: 0.0000885348778976389",
            "extra": "mean: 4.153492562230941 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10847.010250255616,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020029450097539428",
            "extra": "mean: 92.19130220481117 usec\nrounds: 5397"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 112.92158201473349,
            "unit": "iter/sec",
            "range": "stddev: 0.0005584522109870168",
            "extra": "mean: 8.855703065420432 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.62224476073762,
            "unit": "iter/sec",
            "range": "stddev: 0.00017661067297165798",
            "extra": "mean: 10.037918764044079 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 33.50512083853618,
            "unit": "iter/sec",
            "range": "stddev: 0.026123721337208493",
            "extra": "mean: 29.846183955553506 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 37.33044319959884,
            "unit": "iter/sec",
            "range": "stddev: 0.020296916968562367",
            "extra": "mean: 26.78778804347938 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15144424430116288,
            "unit": "iter/sec",
            "range": "stddev: 0.029996309339998417",
            "extra": "mean: 6.603090164400004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.44878089449842,
            "unit": "iter/sec",
            "range": "stddev: 0.000447989032052533",
            "extra": "mean: 18.034661607848246 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 328144.2673566254,
            "unit": "iter/sec",
            "range": "stddev: 2.325048663498108e-7",
            "extra": "mean: 3.0474401032677663 usec\nrounds: 70922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9278061747939577,
            "unit": "iter/sec",
            "range": "stddev: 0.008179326280383308",
            "extra": "mean: 1.0778113222 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.00038931571939,
            "unit": "iter/sec",
            "range": "stddev: 0.0003217864712846647",
            "extra": "mean: 10.526272652174631 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 73.69291562021132,
            "unit": "iter/sec",
            "range": "stddev: 0.00055249320002473",
            "extra": "mean: 13.569825424653652 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1278297709695684,
            "unit": "iter/sec",
            "range": "stddev: 0.0033366415969716934",
            "extra": "mean: 469.96240660000694 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 776.9854658337165,
            "unit": "iter/sec",
            "range": "stddev: 0.00001778097720848013",
            "extra": "mean: 1.287025361442232 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 322430.5317966946,
            "unit": "iter/sec",
            "range": "stddev: 2.2693422555201196e-7",
            "extra": "mean: 3.1014432610573617 usec\nrounds: 26666"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.974751346380346,
            "unit": "iter/sec",
            "range": "stddev: 0.0013555830527606538",
            "extra": "mean: 336.1625505999996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 164.1007847359635,
            "unit": "iter/sec",
            "range": "stddev: 0.00006730378281759809",
            "extra": "mean: 6.093816075340468 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.115977247544283,
            "unit": "iter/sec",
            "range": "stddev: 0.0006399340522780271",
            "extra": "mean: 36.87862660714408 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.271830637106035,
            "unit": "iter/sec",
            "range": "stddev: 0.0003942363546418161",
            "extra": "mean: 21.61142073333243 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 280.0646029311469,
            "unit": "iter/sec",
            "range": "stddev: 0.00012100502458072776",
            "extra": "mean: 3.570604744526916 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 83.74337716266976,
            "unit": "iter/sec",
            "range": "stddev: 0.0009029875211478183",
            "extra": "mean: 11.941242804879018 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9338038202283669,
            "unit": "iter/sec",
            "range": "stddev: 0.005112916196656841",
            "extra": "mean: 1.0708887438000034 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 379645.69767905737,
            "unit": "iter/sec",
            "range": "stddev: 1.9250261336544362e-7",
            "extra": "mean: 2.634034854374602 usec\nrounds: 63292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 75.9618751568821,
            "unit": "iter/sec",
            "range": "stddev: 0.00008941006322062428",
            "extra": "mean: 13.164498611108874 msec\nrounds: 36"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "7723577502ef290ee68f9fb750a4ccc488a27003",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-12T02:37:52Z",
          "tree_id": "b2de629d497802a943b6fd45680f111b1d4e63a8",
          "url": "https://github.com/ibis-project/ibis/commit/7723577502ef290ee68f9fb750a4ccc488a27003"
        },
        "date": 1644634212777,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 34.8477188322585,
            "unit": "iter/sec",
            "range": "stddev: 0.01605851289911846",
            "extra": "mean: 28.69628295652744 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 33.07568650154146,
            "unit": "iter/sec",
            "range": "stddev: 0.01431007087059048",
            "extra": "mean: 30.233688421052 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 601.8877438674025,
            "unit": "iter/sec",
            "range": "stddev: 0.0006642242944942947",
            "extra": "mean: 1.6614393799989102 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 121.84078677818664,
            "unit": "iter/sec",
            "range": "stddev: 0.0009740350839737931",
            "extra": "mean: 8.207432227276389 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 43.951702462486914,
            "unit": "iter/sec",
            "range": "stddev: 0.0014431613323730146",
            "extra": "mean: 22.752247216214368 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5617027337229609,
            "unit": "iter/sec",
            "range": "stddev: 0.03742139304505013",
            "extra": "mean: 1.7803011093999999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 287641.4610465674,
            "unit": "iter/sec",
            "range": "stddev: 0.00000536291341150486",
            "extra": "mean: 3.476550273251831 usec\nrounds: 26525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.949411940870718,
            "unit": "iter/sec",
            "range": "stddev: 0.08502593466614217",
            "extra": "mean: 1.0532835716000022 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 14971.205797687113,
            "unit": "iter/sec",
            "range": "stddev: 0.0005158896082443885",
            "extra": "mean: 66.79488703271241 usec\nrounds: 7542"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 203.9796593459488,
            "unit": "iter/sec",
            "range": "stddev: 0.0005012775263817615",
            "extra": "mean: 4.9024496030949996 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 255828.06260693262,
            "unit": "iter/sec",
            "range": "stddev: 0.000007353411494183034",
            "extra": "mean: 3.9088753196573722 usec\nrounds: 64517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 120.41607814740891,
            "unit": "iter/sec",
            "range": "stddev: 0.0005925065675242628",
            "extra": "mean: 8.304538857143621 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.563407684699247,
            "unit": "iter/sec",
            "range": "stddev: 0.002775947335963402",
            "extra": "mean: 639.6284282000124 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.3179088701044885,
            "unit": "iter/sec",
            "range": "stddev: 0.02012428503562495",
            "extra": "mean: 431.42334580001034 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.75753463105171,
            "unit": "iter/sec",
            "range": "stddev: 0.00424399786271699",
            "extra": "mean: 10.898287579553052 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 76.80727587338298,
            "unit": "iter/sec",
            "range": "stddev: 0.0012468029333883965",
            "extra": "mean: 13.019599883330102 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8831.898073017715,
            "unit": "iter/sec",
            "range": "stddev: 0.000050833185158994913",
            "extra": "mean: 113.22594438166068 usec\nrounds: 5322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4413.544706428735,
            "unit": "iter/sec",
            "range": "stddev: 0.00010646885786502537",
            "extra": "mean: 226.5752510773048 usec\nrounds: 2784"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 164.54042120473403,
            "unit": "iter/sec",
            "range": "stddev: 0.000588523630677078",
            "extra": "mean: 6.077533974194232 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 361328.3608093716,
            "unit": "iter/sec",
            "range": "stddev: 0.000014761292527585818",
            "extra": "mean: 2.767565761403315 usec\nrounds: 62894"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.18207153358975,
            "unit": "iter/sec",
            "range": "stddev: 0.0012786759084078849",
            "extra": "mean: 14.884923569229613 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 77.14610055094792,
            "unit": "iter/sec",
            "range": "stddev: 0.0019077471260086534",
            "extra": "mean: 12.962417968742201 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 79.90407056271766,
            "unit": "iter/sec",
            "range": "stddev: 0.0011087748621609011",
            "extra": "mean: 12.51500696970235 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.186732224829317,
            "unit": "iter/sec",
            "range": "stddev: 0.010641789801179989",
            "extra": "mean: 34.2621432333317 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 210.13508817973124,
            "unit": "iter/sec",
            "range": "stddev: 0.0005861146370668627",
            "extra": "mean: 4.758843507109518 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.49005842433338,
            "unit": "iter/sec",
            "range": "stddev: 0.0008096421521953033",
            "extra": "mean: 10.472294357138791 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 263.10993153446276,
            "unit": "iter/sec",
            "range": "stddev: 0.0003610893343281201",
            "extra": "mean: 3.8006927148966922 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.09695356302583,
            "unit": "iter/sec",
            "range": "stddev: 0.0018966006876500697",
            "extra": "mean: 24.939550542865163 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.570775398056604,
            "unit": "iter/sec",
            "range": "stddev: 0.0034313196184220015",
            "extra": "mean: 44.30507957144008 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5897033099319849,
            "unit": "iter/sec",
            "range": "stddev: 0.01890996296782162",
            "extra": "mean: 1.6957679958000198 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08726563651872725,
            "unit": "iter/sec",
            "range": "stddev: 0.07952512093597144",
            "extra": "mean: 11.459264378199999 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bot@renovateapp.com",
            "name": "Renovate Bot",
            "username": "renovate-bot"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "f0cdfbe0b511c88c3b9fe043ceca088a8d9e450b",
          "message": "chore(deps): update pozil/auto-assign-issue action to v1.4.0",
          "timestamp": "2022-02-12T05:16:00-05:00",
          "tree_id": "1e0d27d47b3e65091b3070de79979caa56ca8f08",
          "url": "https://github.com/ibis-project/ibis/commit/f0cdfbe0b511c88c3b9fe043ceca088a8d9e450b"
        },
        "date": 1644661118967,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 139.67063442368388,
            "unit": "iter/sec",
            "range": "stddev: 0.00013176951622350197",
            "extra": "mean: 7.1597011363644985 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 38.298146803686016,
            "unit": "iter/sec",
            "range": "stddev: 0.018727754235882188",
            "extra": "mean: 26.1109239861119 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 171.77553455959537,
            "unit": "iter/sec",
            "range": "stddev: 0.00015461755888131833",
            "extra": "mean: 5.821550796298425 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13236836132905777,
            "unit": "iter/sec",
            "range": "stddev: 0.05753312010612199",
            "extra": "mean: 7.554675376800015 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8136796509003978,
            "unit": "iter/sec",
            "range": "stddev: 0.012011729964746927",
            "extra": "mean: 1.228984894600012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.623007109232718,
            "unit": "iter/sec",
            "range": "stddev: 0.0028487867282359996",
            "extra": "mean: 381.24181839999665 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 307407.65466050635,
            "unit": "iter/sec",
            "range": "stddev: 5.98743849801018e-7",
            "extra": "mean: 3.253009431740976 usec\nrounds: 68494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 86.37694999385066,
            "unit": "iter/sec",
            "range": "stddev: 0.00028560920216632696",
            "extra": "mean: 11.577162658222962 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.95512449412407,
            "unit": "iter/sec",
            "range": "stddev: 0.0008913574649964558",
            "extra": "mean: 25.0280786923105 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.1629800346105255,
            "unit": "iter/sec",
            "range": "stddev: 0.008578820746589727",
            "extra": "mean: 859.8599891999811 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 257.63169597898,
            "unit": "iter/sec",
            "range": "stddev: 0.0001112914595972218",
            "extra": "mean: 3.8815099834672098 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.57888549686537,
            "unit": "iter/sec",
            "range": "stddev: 0.00021541419673029547",
            "extra": "mean: 11.550160229727208 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9483.750461514417,
            "unit": "iter/sec",
            "range": "stddev: 0.000019083296175764822",
            "extra": "mean: 105.44351668235633 usec\nrounds: 5365"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.668999469624346,
            "unit": "iter/sec",
            "range": "stddev: 0.0003614633512291443",
            "extra": "mean: 24.5887534249988 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 302658.5629872614,
            "unit": "iter/sec",
            "range": "stddev: 5.693548319719369e-7",
            "extra": "mean: 3.304053221326135 usec\nrounds: 25253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 36.05081746303301,
            "unit": "iter/sec",
            "range": "stddev: 0.017170132239461816",
            "extra": "mean: 27.738622044435285 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 138.10496739481582,
            "unit": "iter/sec",
            "range": "stddev: 0.004486646733633065",
            "extra": "mean: 7.2408691654166955 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 214.25485803743928,
            "unit": "iter/sec",
            "range": "stddev: 0.00012168942764244886",
            "extra": "mean: 4.667338743960981 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8834012346814646,
            "unit": "iter/sec",
            "range": "stddev: 0.0023914235957747765",
            "extra": "mean: 530.9543083999984 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 228.689854477341,
            "unit": "iter/sec",
            "range": "stddev: 0.0036310684872248875",
            "extra": "mean: 4.3727344279677345 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.027272043152674,
            "unit": "iter/sec",
            "range": "stddev: 0.0010035818758150673",
            "extra": "mean: 39.95641228000295 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 20684.063394594556,
            "unit": "iter/sec",
            "range": "stddev: 0.000021279304338083625",
            "extra": "mean: 48.34639987911339 usec\nrounds: 6627"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 682.2572081309653,
            "unit": "iter/sec",
            "range": "stddev: 0.000043776382900591905",
            "extra": "mean: 1.4657228799963682 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8136792032058322,
            "unit": "iter/sec",
            "range": "stddev: 0.006107956690600279",
            "extra": "mean: 1.228985570799989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 73.21717312631344,
            "unit": "iter/sec",
            "range": "stddev: 0.00024856405707482203",
            "extra": "mean: 13.657997943662906 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 350860.7075421193,
            "unit": "iter/sec",
            "range": "stddev: 5.086328689540928e-7",
            "extra": "mean: 2.8501339092806632 usec\nrounds: 71429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 99.77220056011261,
            "unit": "iter/sec",
            "range": "stddev: 0.000612452939056697",
            "extra": "mean: 10.02283195505447 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5437.8442648683385,
            "unit": "iter/sec",
            "range": "stddev: 0.000040810569930567533",
            "extra": "mean: 183.89640292948187 usec\nrounds: 2936"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.44836413283299,
            "unit": "iter/sec",
            "range": "stddev: 0.000506364688194606",
            "extra": "mean: 15.049279437503671 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.257984284932284,
            "unit": "iter/sec",
            "range": "stddev: 0.00038357694373999376",
            "extra": "mean: 19.897335999999655 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.256379100320025,
            "unit": "iter/sec",
            "range": "stddev: 0.00031867345022705453",
            "extra": "mean: 18.09745799999784 msec\nrounds: 30"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "3ede51a5190358aefc6c2f9483f03b3516e4b796",
          "message": "chore(deps/poetry2nix): update",
          "timestamp": "2022-02-13T01:07:21Z",
          "tree_id": "7ee8c2daef42a48a30d5191c3a4858f18d17be27",
          "url": "https://github.com/ibis-project/ibis/commit/3ede51a5190358aefc6c2f9483f03b3516e4b796"
        },
        "date": 1644715222488,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 162.85561278839776,
            "unit": "iter/sec",
            "range": "stddev: 0.0041852083930162725",
            "extra": "mean: 6.140408567307558 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 140.1506660431456,
            "unit": "iter/sec",
            "range": "stddev: 0.0001527408264780244",
            "extra": "mean: 7.135178363634379 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.9429293113558,
            "unit": "iter/sec",
            "range": "stddev: 0.00044254611172389065",
            "extra": "mean: 11.772610246752023 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 17510.626855449318,
            "unit": "iter/sec",
            "range": "stddev: 0.0005818603598062075",
            "extra": "mean: 57.10817826540569 usec\nrounds: 5834"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 35.438828723412776,
            "unit": "iter/sec",
            "range": "stddev: 0.018792892366918664",
            "extra": "mean: 28.2176368695658 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 33.752050948650115,
            "unit": "iter/sec",
            "range": "stddev: 0.023317130656840053",
            "extra": "mean: 29.627829180555153 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.140128511728641,
            "unit": "iter/sec",
            "range": "stddev: 0.005687638854107467",
            "extra": "mean: 877.094108 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.27539093734158,
            "unit": "iter/sec",
            "range": "stddev: 0.000528610092895217",
            "extra": "mean: 24.829057564102843 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13049643209740242,
            "unit": "iter/sec",
            "range": "stddev: 0.05584868094019314",
            "extra": "mean: 7.663044758599997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 87.83057625037956,
            "unit": "iter/sec",
            "range": "stddev: 0.000293211728818307",
            "extra": "mean: 11.385556632912087 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.291641759566524,
            "unit": "iter/sec",
            "range": "stddev: 0.0010788332116633543",
            "extra": "mean: 24.217976263157862 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9148.51992047625,
            "unit": "iter/sec",
            "range": "stddev: 0.000006043807228874623",
            "extra": "mean: 109.30729874258637 usec\nrounds: 318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 249.05075101091626,
            "unit": "iter/sec",
            "range": "stddev: 0.00019615883530526987",
            "extra": "mean: 4.015245872340969 msec\nrounds: 235"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8404761367421762,
            "unit": "iter/sec",
            "range": "stddev: 0.008740324789774417",
            "extra": "mean: 543.3376613999997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.945619351097694,
            "unit": "iter/sec",
            "range": "stddev: 0.0009636489017165119",
            "extra": "mean: 41.761291923073976 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 680.920289373582,
            "unit": "iter/sec",
            "range": "stddev: 0.00005104775478381012",
            "extra": "mean: 1.468600680000236 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 306790.0176591383,
            "unit": "iter/sec",
            "range": "stddev: 7.000206458400709e-7",
            "extra": "mean: 3.259558468134575 usec\nrounds: 26245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8152885944894357,
            "unit": "iter/sec",
            "range": "stddev: 0.01607480623985667",
            "extra": "mean: 1.226559535800004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 145.2845558728164,
            "unit": "iter/sec",
            "range": "stddev: 0.00018093821927312435",
            "extra": "mean: 6.883044064748425 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 213.22223868910234,
            "unit": "iter/sec",
            "range": "stddev: 0.00014220453258547694",
            "extra": "mean: 4.689942316280114 msec\nrounds: 215"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.194624792663014,
            "unit": "iter/sec",
            "range": "stddev: 0.0005872675053868711",
            "extra": "mean: 18.11770627586419 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8046519764420568,
            "unit": "iter/sec",
            "range": "stddev: 0.010075597854841646",
            "extra": "mean: 1.242773309799992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 257.2971119993167,
            "unit": "iter/sec",
            "range": "stddev: 0.00009770258255838687",
            "extra": "mean: 3.886557420833607 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 355558.29713252356,
            "unit": "iter/sec",
            "range": "stddev: 6.321739197100229e-7",
            "extra": "mean: 2.8124783138650264 usec\nrounds: 59877"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.44786522749263,
            "unit": "iter/sec",
            "range": "stddev: 0.0006836225829868054",
            "extra": "mean: 20.64074434042414 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 73.56906436403472,
            "unit": "iter/sec",
            "range": "stddev: 0.00031654739368309315",
            "extra": "mean: 13.592669808219883 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.640608773128948,
            "unit": "iter/sec",
            "range": "stddev: 0.003876266251436075",
            "extra": "mean: 378.70055200000934 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 313988.35556563636,
            "unit": "iter/sec",
            "range": "stddev: 7.127276089485409e-7",
            "extra": "mean: 3.1848314826788515 usec\nrounds: 64931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5621.238849291971,
            "unit": "iter/sec",
            "range": "stddev: 0.00004149933301904431",
            "extra": "mean: 177.8967282498512 usec\nrounds: 2885"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.76376991994519,
            "unit": "iter/sec",
            "range": "stddev: 0.005611294233905062",
            "extra": "mean: 10.55255611764689 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.9942187549903,
            "unit": "iter/sec",
            "range": "stddev: 0.0007738416797121866",
            "extra": "mean: 15.152842459012865 msec\nrounds: 61"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "217f4e61178ff077a2e3f9bc4b2d66c2a7f428f6",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-13T01:20:43Z",
          "tree_id": "a8448811c8615b0217e07c138f4c5229d5b42752",
          "url": "https://github.com/ibis-project/ibis/commit/217f4e61178ff077a2e3f9bc4b2d66c2a7f428f6"
        },
        "date": 1644715466682,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.58715001777203,
            "unit": "iter/sec",
            "range": "stddev: 0.00017194582077428887",
            "extra": "mean: 10.143309750000206 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 83.19855966653253,
            "unit": "iter/sec",
            "range": "stddev: 0.00005752919541561396",
            "extra": "mean: 12.019438846154209 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 195.44888288883888,
            "unit": "iter/sec",
            "range": "stddev: 0.0001298985514268902",
            "extra": "mean: 5.116427299145771 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19671.96485735911,
            "unit": "iter/sec",
            "range": "stddev: 0.0005627057776389873",
            "extra": "mean: 50.83376303541477 usec\nrounds: 6444"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 387318.76745725475,
            "unit": "iter/sec",
            "range": "stddev: 3.681201992203659e-7",
            "extra": "mean: 2.5818526857476947 usec\nrounds: 66667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 114.56542181588772,
            "unit": "iter/sec",
            "range": "stddev: 0.0003829868003139392",
            "extra": "mean: 8.728637176468911 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 95.93752428288623,
            "unit": "iter/sec",
            "range": "stddev: 0.0002690828048594808",
            "extra": "mean: 10.423450130434361 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 162.42820375609787,
            "unit": "iter/sec",
            "range": "stddev: 0.00011788431439428804",
            "extra": "mean: 6.156566266666346 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9212916292470194,
            "unit": "iter/sec",
            "range": "stddev: 0.008447195854551306",
            "extra": "mean: 1.0854326341999978 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 83.64641416274146,
            "unit": "iter/sec",
            "range": "stddev: 0.00021443518407554394",
            "extra": "mean: 11.955085104478142 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.161293898671447,
            "unit": "iter/sec",
            "range": "stddev: 0.002188758905314546",
            "extra": "mean: 462.6858016000057 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.513481642689932,
            "unit": "iter/sec",
            "range": "stddev: 0.00035904021466226087",
            "extra": "mean: 36.34581813333284 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 298.51896542489243,
            "unit": "iter/sec",
            "range": "stddev: 0.00008309355449840195",
            "extra": "mean: 3.3498709154933093 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 240.31152688034283,
            "unit": "iter/sec",
            "range": "stddev: 0.0002067132992683455",
            "extra": "mean: 4.161265225108928 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9085784820603575,
            "unit": "iter/sec",
            "range": "stddev: 0.0070683209601172",
            "extra": "mean: 1.1006203864000041 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 326316.7364724706,
            "unit": "iter/sec",
            "range": "stddev: 1.9421164727536272e-7",
            "extra": "mean: 3.0645072355470924 usec\nrounds: 26881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5675.7868994409355,
            "unit": "iter/sec",
            "range": "stddev: 0.0010655112945476665",
            "extra": "mean: 176.18702352945982 usec\nrounds: 2805"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.0106545444596144,
            "unit": "iter/sec",
            "range": "stddev: 0.0016414757105443303",
            "extra": "mean: 332.1536846000015 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.3159111268975534,
            "unit": "iter/sec",
            "range": "stddev: 0.002728977033776602",
            "extra": "mean: 759.9297395999997 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10638.411511766337,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019932849578548824",
            "extra": "mean: 93.99899589275863 usec\nrounds: 5600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 166.2232490081606,
            "unit": "iter/sec",
            "range": "stddev: 0.00009781452689028212",
            "extra": "mean: 6.016005618750153 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 37.66905902667382,
            "unit": "iter/sec",
            "range": "stddev: 0.019764399628819984",
            "extra": "mean: 26.546986461538378 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 71.03778243911393,
            "unit": "iter/sec",
            "range": "stddev: 0.0005635815386059363",
            "extra": "mean: 14.077016000001045 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15103096890636647,
            "unit": "iter/sec",
            "range": "stddev: 0.028063992612069107",
            "extra": "mean: 6.621158609000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 788.6994182349231,
            "unit": "iter/sec",
            "range": "stddev: 0.00001790906282876715",
            "extra": "mean: 1.2679101529426242 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 280.29910775489975,
            "unit": "iter/sec",
            "range": "stddev: 0.00014361290342804794",
            "extra": "mean: 3.5676174926479747 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.520295425586625,
            "unit": "iter/sec",
            "range": "stddev: 0.0005135146017504408",
            "extra": "mean: 22.461665863638494 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.93938157153751,
            "unit": "iter/sec",
            "range": "stddev: 0.00031091103591687405",
            "extra": "mean: 18.20187944230648 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 34.479894587158896,
            "unit": "iter/sec",
            "range": "stddev: 0.02504364869699026",
            "extra": "mean: 29.002408852271344 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.027449908566965,
            "unit": "iter/sec",
            "range": "stddev: 0.0008523091307473817",
            "extra": "mean: 22.20867497561169 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 326894.15924326546,
            "unit": "iter/sec",
            "range": "stddev: 2.406318619935435e-7",
            "extra": "mean: 3.05909411876591 usec\nrounds: 68966"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "5c3f8ec291d2666f0decc39e4f69365ddfbb93a9",
          "message": "test: remove flaky test\n\nRemove a test that is flaky when parallelized.",
          "timestamp": "2022-02-13T09:40:18-05:00",
          "tree_id": "0171c17d9cf477fd828290ab17fe736a3135a1d2",
          "url": "https://github.com/ibis-project/ibis/commit/5c3f8ec291d2666f0decc39e4f69365ddfbb93a9"
        },
        "date": 1644763593592,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8460618066824078,
            "unit": "iter/sec",
            "range": "stddev: 0.015161125948646072",
            "extra": "mean: 1.1819467467999971 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 71.38850178239859,
            "unit": "iter/sec",
            "range": "stddev: 0.00023598387474310753",
            "extra": "mean: 14.00785805882479 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5509.681441603574,
            "unit": "iter/sec",
            "range": "stddev: 0.000040708879011129154",
            "extra": "mean: 181.4986965396957 usec\nrounds: 2890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 48.493860594583055,
            "unit": "iter/sec",
            "range": "stddev: 0.0007708026340499828",
            "extra": "mean: 20.621167045456964 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9512.327757919082,
            "unit": "iter/sec",
            "range": "stddev: 0.000009774061409776298",
            "extra": "mean: 105.12673926395071 usec\nrounds: 326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.1718866551452385,
            "unit": "iter/sec",
            "range": "stddev: 0.012088486561373114",
            "extra": "mean: 853.3248463999826 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 258.7868628735868,
            "unit": "iter/sec",
            "range": "stddev: 0.00011967076657518455",
            "extra": "mean: 3.8641837877546505 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 38.41130902687654,
            "unit": "iter/sec",
            "range": "stddev: 0.0016210737350837608",
            "extra": "mean: 26.033999499998714 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8253941723231679,
            "unit": "iter/sec",
            "range": "stddev: 0.015526480334059095",
            "extra": "mean: 1.2115423557999976 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.70963376273428,
            "unit": "iter/sec",
            "range": "stddev: 0.0003889786666591544",
            "extra": "mean: 12.390094631574524 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 136.39706677122396,
            "unit": "iter/sec",
            "range": "stddev: 0.00015363642258625792",
            "extra": "mean: 7.331535960940272 msec\nrounds: 128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.44796467063371,
            "unit": "iter/sec",
            "range": "stddev: 0.0010160995133953626",
            "extra": "mean: 25.349850324329434 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.21866516923958,
            "unit": "iter/sec",
            "range": "stddev: 0.0009450955166195189",
            "extra": "mean: 41.29046720832955 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 144.71243950149278,
            "unit": "iter/sec",
            "range": "stddev: 0.00015228797192966942",
            "extra": "mean: 6.910255976920937 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.36033516881976,
            "unit": "iter/sec",
            "range": "stddev: 0.0009281016227949429",
            "extra": "mean: 15.537520079361919 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 296621.9783876455,
            "unit": "iter/sec",
            "range": "stddev: 7.355295678008629e-7",
            "extra": "mean: 3.3712943505930393 usec\nrounds: 25772"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 215.6329238590556,
            "unit": "iter/sec",
            "range": "stddev: 0.0001285188623211147",
            "extra": "mean: 4.637510738636699 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1305452426632055,
            "unit": "iter/sec",
            "range": "stddev: 0.22760931182652516",
            "extra": "mean: 7.660179563800011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 321081.05162493914,
            "unit": "iter/sec",
            "range": "stddev: 9.445890386536512e-7",
            "extra": "mean: 3.1144784002019494 usec\nrounds: 63288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 307721.736213153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010338551925267328",
            "extra": "mean: 3.2496891909751837 usec\nrounds: 68489"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 244.20679083749602,
            "unit": "iter/sec",
            "range": "stddev: 0.00018322769371749976",
            "extra": "mean: 4.094890222219234 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.30521623978878,
            "unit": "iter/sec",
            "range": "stddev: 0.0004076575724013503",
            "extra": "mean: 11.722612567900292 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 665.0411873605432,
            "unit": "iter/sec",
            "range": "stddev: 0.000046722922617024755",
            "extra": "mean: 1.5036662676019543 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 31.100333145521837,
            "unit": "iter/sec",
            "range": "stddev: 0.02693755859212293",
            "extra": "mean: 32.1539964000029 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.653248397085756,
            "unit": "iter/sec",
            "range": "stddev: 0.0012236085340077791",
            "extra": "mean: 376.89648699999907 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 74.65816653712714,
            "unit": "iter/sec",
            "range": "stddev: 0.00041934421030669875",
            "extra": "mean: 13.3943819729715 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 38.66612435740506,
            "unit": "iter/sec",
            "range": "stddev: 0.016708656028774565",
            "extra": "mean: 25.862431692316406 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 21484.87387146777,
            "unit": "iter/sec",
            "range": "stddev: 0.000014766285043642924",
            "extra": "mean: 46.544373775822564 usec\nrounds: 6124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9167805319918936,
            "unit": "iter/sec",
            "range": "stddev: 0.00501564897898504",
            "extra": "mean: 521.7081367999981 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 175.56337254000547,
            "unit": "iter/sec",
            "range": "stddev: 0.0001899105046549997",
            "extra": "mean: 5.695948907407385 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 101.83263995095675,
            "unit": "iter/sec",
            "range": "stddev: 0.0006251708739213574",
            "extra": "mean: 9.820034131311987 msec\nrounds: 99"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "d93f28c177687c8438eb5f600b052c0036c61d09",
          "message": "chore: remove unused file backend base classes",
          "timestamp": "2022-02-13T11:31:39-05:00",
          "tree_id": "4f091b85359a22e4556d0aebee3803c64430f552",
          "url": "https://github.com/ibis-project/ibis/commit/d93f28c177687c8438eb5f600b052c0036c61d09"
        },
        "date": 1644770104889,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12618.989947822649,
            "unit": "iter/sec",
            "range": "stddev: 0.000606155303069153",
            "extra": "mean: 79.24564518513985 usec\nrounds: 2700"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 124.7021900738649,
            "unit": "iter/sec",
            "range": "stddev: 0.0005899493078705456",
            "extra": "mean: 8.019105353383685 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.9309223482182588,
            "unit": "iter/sec",
            "range": "stddev: 0.013691235261048902",
            "extra": "mean: 1.0742034520000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 82.86966646381894,
            "unit": "iter/sec",
            "range": "stddev: 0.00041835306260586857",
            "extra": "mean: 12.067141605265201 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4065.1580635206337,
            "unit": "iter/sec",
            "range": "stddev: 0.0007544785103374884",
            "extra": "mean: 245.99289483320834 usec\nrounds: 2729"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 581.3531596907917,
            "unit": "iter/sec",
            "range": "stddev: 0.00013877395367791831",
            "extra": "mean: 1.7201248214284703 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7676.020070195947,
            "unit": "iter/sec",
            "range": "stddev: 0.00003123182645718043",
            "extra": "mean: 130.27584488513108 usec\nrounds: 303"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.5631047197883587,
            "unit": "iter/sec",
            "range": "stddev: 0.01932146353257486",
            "extra": "mean: 639.7524025999985 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 31.546718685149756,
            "unit": "iter/sec",
            "range": "stddev: 0.021365862065847382",
            "extra": "mean: 31.69901789090788 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 31.158317225795805,
            "unit": "iter/sec",
            "range": "stddev: 0.0164954468813867",
            "extra": "mean: 32.094159410255486 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08813712546305252,
            "unit": "iter/sec",
            "range": "stddev: 0.09044728573042168",
            "extra": "mean: 11.345956595999997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5271501785908632,
            "unit": "iter/sec",
            "range": "stddev: 0.04133064753164635",
            "extra": "mean: 1.8969926229999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 265279.3594326722,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039453793035799215",
            "extra": "mean: 3.769611032455013 usec\nrounds: 24691"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 141.2395693477794,
            "unit": "iter/sec",
            "range": "stddev: 0.0005713938317037391",
            "extra": "mean: 7.080168855072499 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5382834611915859,
            "unit": "iter/sec",
            "range": "stddev: 0.031566330443761094",
            "extra": "mean: 1.857757245199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 185.55295974183727,
            "unit": "iter/sec",
            "range": "stddev: 0.0006967557934963194",
            "extra": "mean: 5.389296949999157 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8859953280085675,
            "unit": "iter/sec",
            "range": "stddev: 0.0072951829863514535",
            "extra": "mean: 530.2240070000096 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.509768078328,
            "unit": "iter/sec",
            "range": "stddev: 0.0022894426088285067",
            "extra": "mean: 29.842044793104275 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 213.99038685831417,
            "unit": "iter/sec",
            "range": "stddev: 0.0003623283303844197",
            "extra": "mean: 4.673107117947841 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.01936859936,
            "unit": "iter/sec",
            "range": "stddev: 0.001852508315190119",
            "extra": "mean: 12.655125163934796 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 39.46106221409974,
            "unit": "iter/sec",
            "range": "stddev: 0.001440989137898414",
            "extra": "mean: 25.341436441178523 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 267745.300452624,
            "unit": "iter/sec",
            "range": "stddev: 0.000003848039030228505",
            "extra": "mean: 3.7348928190690853 usec\nrounds: 67568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 66.96436003895401,
            "unit": "iter/sec",
            "range": "stddev: 0.0005528283399434101",
            "extra": "mean: 14.933316758620368 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 118.18074553972457,
            "unit": "iter/sec",
            "range": "stddev: 0.00041572340159453703",
            "extra": "mean: 8.461615260870612 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 19.765305102763524,
            "unit": "iter/sec",
            "range": "stddev: 0.0024294607402139557",
            "extra": "mean: 50.5937042105251 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 71.30843835715194,
            "unit": "iter/sec",
            "range": "stddev: 0.0011378807604949563",
            "extra": "mean: 14.023585749998468 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 180.03203262275326,
            "unit": "iter/sec",
            "range": "stddev: 0.0005603107036302967",
            "extra": "mean: 5.554567070269336 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.96255130380232,
            "unit": "iter/sec",
            "range": "stddev: 0.0015725912558271836",
            "extra": "mean: 16.67707557894703 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 310679.91389271757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026255469019360136",
            "extra": "mean: 3.2187468686672642 usec\nrounds: 48781"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 61.8776490926484,
            "unit": "iter/sec",
            "range": "stddev: 0.0013113859996256333",
            "extra": "mean: 16.160924253969576 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 29.2700599446519,
            "unit": "iter/sec",
            "range": "stddev: 0.0020517921271836484",
            "extra": "mean: 34.16460375861703 msec\nrounds: 29"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "f05d64b1dde728ea33229319d5781f175b65402c",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-14T01:57:48Z",
          "tree_id": "eedd7a1e266fa6c618935146b4ec051a5ab65919",
          "url": "https://github.com/ibis-project/ibis/commit/f05d64b1dde728ea33229319d5781f175b65402c"
        },
        "date": 1644804378350,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.32042563054002,
            "unit": "iter/sec",
            "range": "stddev: 0.00205904729720791",
            "extra": "mean: 757.3315579999957 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.44910715578494,
            "unit": "iter/sec",
            "range": "stddev: 0.0009156921974718276",
            "extra": "mean: 22.497639750000076 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 290.7200438320226,
            "unit": "iter/sec",
            "range": "stddev: 0.00008768160528990356",
            "extra": "mean: 3.4397353096775047 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.54545471448517,
            "unit": "iter/sec",
            "range": "stddev: 0.001492409023075962",
            "extra": "mean: 39.14590721428673 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 83.10058023533641,
            "unit": "iter/sec",
            "range": "stddev: 0.00011947106065528415",
            "extra": "mean: 12.033610320987572 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 780.3216534624852,
            "unit": "iter/sec",
            "range": "stddev: 0.000023568071218661416",
            "extra": "mean: 1.2815228125001354 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.89496756711816,
            "unit": "iter/sec",
            "range": "stddev: 0.0005227357176603716",
            "extra": "mean: 10.428075897727236 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.965512947357472,
            "unit": "iter/sec",
            "range": "stddev: 0.002590119835774816",
            "extra": "mean: 337.20979059999934 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 162.80592890759706,
            "unit": "iter/sec",
            "range": "stddev: 0.00006837671564532842",
            "extra": "mean: 6.142282450705864 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15183535984777313,
            "unit": "iter/sec",
            "range": "stddev: 0.035764142155778576",
            "extra": "mean: 6.586081140799999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 91.64153178436048,
            "unit": "iter/sec",
            "range": "stddev: 0.0005703922590821786",
            "extra": "mean: 10.912082988235907 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.09052287435561,
            "unit": "iter/sec",
            "range": "stddev: 0.002551260232341774",
            "extra": "mean: 23.75831735293713 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 277.73498484824046,
            "unit": "iter/sec",
            "range": "stddev: 0.00013885597112164692",
            "extra": "mean: 3.6005546818180596 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.45008366047335,
            "unit": "iter/sec",
            "range": "stddev: 0.00030655633572483035",
            "extra": "mean: 14.609185942857396 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9232766729339987,
            "unit": "iter/sec",
            "range": "stddev: 0.00574599770710486",
            "extra": "mean: 1.0830989553999983 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 242.6398888578625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000435832658480508",
            "extra": "mean: 4.121333902299123 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 59.7965370066743,
            "unit": "iter/sec",
            "range": "stddev: 0.00219504888833317",
            "extra": "mean: 16.72337647058697 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10723.703867481277,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017701514761204396",
            "extra": "mean: 93.2513628087414 usec\nrounds: 5383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.10039339978809,
            "unit": "iter/sec",
            "range": "stddev: 0.001550834217708037",
            "extra": "mean: 18.484153943396592 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1405299947300915,
            "unit": "iter/sec",
            "range": "stddev: 0.0028538817470389263",
            "extra": "mean: 467.1740188000001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 376399.65929863456,
            "unit": "iter/sec",
            "range": "stddev: 2.1120242266710725e-7",
            "extra": "mean: 2.656750545054565 usec\nrounds: 45872"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8991333274177424,
            "unit": "iter/sec",
            "range": "stddev: 0.022490442078311187",
            "extra": "mean: 1.1121821086000012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18868.037955689844,
            "unit": "iter/sec",
            "range": "stddev: 0.0007278922774727721",
            "extra": "mean: 52.99968138438263 usec\nrounds: 5866"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 110.73149434456843,
            "unit": "iter/sec",
            "range": "stddev: 0.0005838200011652001",
            "extra": "mean: 9.030854373627909 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 35.1189609901449,
            "unit": "iter/sec",
            "range": "stddev: 0.02478505015172572",
            "extra": "mean: 28.474646510203435 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 324658.5032908994,
            "unit": "iter/sec",
            "range": "stddev: 3.509285994543217e-7",
            "extra": "mean: 3.0801595826491672 usec\nrounds: 25316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.3620907037862,
            "unit": "iter/sec",
            "range": "stddev: 0.00009216663511036474",
            "extra": "mean: 6.121371217103451 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 28.975381691032524,
            "unit": "iter/sec",
            "range": "stddev: 0.035042128714724334",
            "extra": "mean: 34.51205615384477 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6229.4308890317225,
            "unit": "iter/sec",
            "range": "stddev: 0.00003499150998116265",
            "extra": "mean: 160.52830793270684 usec\nrounds: 2559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 321723.58652685495,
            "unit": "iter/sec",
            "range": "stddev: 2.3244880143038815e-7",
            "extra": "mean: 3.108258274736496 usec\nrounds: 56498"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 191.1777400543222,
            "unit": "iter/sec",
            "range": "stddev: 0.00015469686187870394",
            "extra": "mean: 5.230734497205873 msec\nrounds: 179"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "78b3d677d3170fde33c9f6de676254b9dd7d3cf9",
          "message": "ci: test datafusion backend as a simple backend",
          "timestamp": "2022-02-14T05:26:22-05:00",
          "tree_id": "25c2e4e605a38ddfa83a02af80ace9a0275c3738",
          "url": "https://github.com/ibis-project/ibis/commit/78b3d677d3170fde33c9f6de676254b9dd7d3cf9"
        },
        "date": 1644834532419,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 348385.51973139716,
            "unit": "iter/sec",
            "range": "stddev: 1.6969951969079472e-7",
            "extra": "mean: 2.8703833637258898 usec\nrounds: 29069"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 82.51072614686322,
            "unit": "iter/sec",
            "range": "stddev: 0.00009532475244301329",
            "extra": "mean: 12.119636400000543 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 41.41148616885321,
            "unit": "iter/sec",
            "range": "stddev: 0.01476962379431604",
            "extra": "mean: 24.147889692307864 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19968.75254955875,
            "unit": "iter/sec",
            "range": "stddev: 0.0005687133322636676",
            "extra": "mean: 50.07824086748459 usec\nrounds: 7008"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1511714159065585,
            "unit": "iter/sec",
            "range": "stddev: 0.020571381715720583",
            "extra": "mean: 6.615007169200004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.167091601624403,
            "unit": "iter/sec",
            "range": "stddev: 0.0006680819786266685",
            "extra": "mean: 39.73442842856961 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.35677410527771,
            "unit": "iter/sec",
            "range": "stddev: 0.0008679308834523031",
            "extra": "mean: 15.30063277586474 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 32.96983317846182,
            "unit": "iter/sec",
            "range": "stddev: 0.027569882472348307",
            "extra": "mean: 30.330757046513337 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 239.49528838560929,
            "unit": "iter/sec",
            "range": "stddev: 0.0001316852946135925",
            "extra": "mean: 4.175447486841196 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 195.05976891396824,
            "unit": "iter/sec",
            "range": "stddev: 0.00011983091838985311",
            "extra": "mean: 5.126633777778406 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.969954432814782,
            "unit": "iter/sec",
            "range": "stddev: 0.0011362301233780246",
            "extra": "mean: 336.7055026000003 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9241939862245956,
            "unit": "iter/sec",
            "range": "stddev: 0.009720039424962038",
            "extra": "mean: 1.0820239201999982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 104.84044917400425,
            "unit": "iter/sec",
            "range": "stddev: 0.006617606828680742",
            "extra": "mean: 9.53830327777683 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 293.9481252256713,
            "unit": "iter/sec",
            "range": "stddev: 0.000021711856370724035",
            "extra": "mean: 3.4019608025473036 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 159.63230148313815,
            "unit": "iter/sec",
            "range": "stddev: 0.00009972032369147151",
            "extra": "mean: 6.264396307696092 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6244.970884277734,
            "unit": "iter/sec",
            "range": "stddev: 0.00003472466339313422",
            "extra": "mean: 160.12884904196886 usec\nrounds: 2610"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.84106171516991,
            "unit": "iter/sec",
            "range": "stddev: 0.0012885805464382951",
            "extra": "mean: 25.74594915384191 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 315959.58255789767,
            "unit": "iter/sec",
            "range": "stddev: 3.236745705471774e-7",
            "extra": "mean: 3.164961771073223 usec\nrounds: 27100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 97.44370719020156,
            "unit": "iter/sec",
            "range": "stddev: 0.0003176117095284117",
            "extra": "mean: 10.262335340424679 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 281.4381298642702,
            "unit": "iter/sec",
            "range": "stddev: 0.00013070269444162393",
            "extra": "mean: 3.553178812274912 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.7141398540751,
            "unit": "iter/sec",
            "range": "stddev: 0.00011342740676355778",
            "extra": "mean: 6.1082078853502795 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 319834.266775677,
            "unit": "iter/sec",
            "range": "stddev: 2.2068923975024992e-7",
            "extra": "mean: 3.126619327194771 usec\nrounds: 75758"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9152616721789819,
            "unit": "iter/sec",
            "range": "stddev: 0.004160925861261695",
            "extra": "mean: 1.0925837172000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.01866217127007,
            "unit": "iter/sec",
            "range": "stddev: 0.0004258290103285226",
            "extra": "mean: 19.992537916665515 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 81.82888850523253,
            "unit": "iter/sec",
            "range": "stddev: 0.00008350885148036754",
            "extra": "mean: 12.220623037499223 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.299388540575369,
            "unit": "iter/sec",
            "range": "stddev: 0.0013277664392083422",
            "extra": "mean: 769.5927497999946 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 42.97161901062142,
            "unit": "iter/sec",
            "range": "stddev: 0.0006600945644072997",
            "extra": "mean: 23.2711734634161 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 782.6489695540498,
            "unit": "iter/sec",
            "range": "stddev: 0.000022774173904430724",
            "extra": "mean: 1.2777120253155076 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 84.30696897039132,
            "unit": "iter/sec",
            "range": "stddev: 0.0005774580158682594",
            "extra": "mean: 11.861415636365729 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10690.369471092783,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020527390246514822",
            "extra": "mean: 93.54213647190052 usec\nrounds: 5459"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0983641703119082,
            "unit": "iter/sec",
            "range": "stddev: 0.004430120087877124",
            "extra": "mean: 476.5617018000057 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "1619ed4f9f9291f77552ceaf54cd248cfce40b2e",
          "message": "chore(setup.py): regen",
          "timestamp": "2022-02-14T08:38:52-05:00",
          "tree_id": "d7668e1fb4361ea4e9a5ef8de772992458346827",
          "url": "https://github.com/ibis-project/ibis/commit/1619ed4f9f9291f77552ceaf54cd248cfce40b2e"
        },
        "date": 1644847191896,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 311617.6237609826,
            "unit": "iter/sec",
            "range": "stddev: 2.718274139965071e-7",
            "extra": "mean: 3.209061117695389 usec\nrounds: 39841"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.92073111481964,
            "unit": "iter/sec",
            "range": "stddev: 0.00022599514398713766",
            "extra": "mean: 20.867795142857222 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 308177.50822505687,
            "unit": "iter/sec",
            "range": "stddev: 4.068376790127609e-7",
            "extra": "mean: 3.24488313816113 usec\nrounds: 30121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.5155343232393,
            "unit": "iter/sec",
            "range": "stddev: 0.00003826433689818627",
            "extra": "mean: 6.556709153840119 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 87.21851858474537,
            "unit": "iter/sec",
            "range": "stddev: 0.00008882887139541874",
            "extra": "mean: 11.465454999999292 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9330759046333313,
            "unit": "iter/sec",
            "range": "stddev: 0.0017046552493195576",
            "extra": "mean: 1.0717241705999982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.819055177737862,
            "unit": "iter/sec",
            "range": "stddev: 0.00041672024685328687",
            "extra": "mean: 34.69926386665444 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9727.41521343982,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020484996248472408",
            "extra": "mean: 102.80223245928234 usec\nrounds: 5644"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 103.73667965641937,
            "unit": "iter/sec",
            "range": "stddev: 0.00029884585835034995",
            "extra": "mean: 9.639791858694975 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16643757141349208,
            "unit": "iter/sec",
            "range": "stddev: 0.029594332364514052",
            "extra": "mean: 6.008258781399979 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1496464215133346,
            "unit": "iter/sec",
            "range": "stddev: 0.0047717352706696465",
            "extra": "mean: 465.19278240000403 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.37889677131559,
            "unit": "iter/sec",
            "range": "stddev: 0.00019707332768565628",
            "extra": "mean: 17.737133169813628 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 93.45494958206717,
            "unit": "iter/sec",
            "range": "stddev: 0.0002770308561000285",
            "extra": "mean: 10.700342833333327 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 302.6298383227623,
            "unit": "iter/sec",
            "range": "stddev: 0.00009608331766168612",
            "extra": "mean: 3.3043668315794923 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6551.683970679794,
            "unit": "iter/sec",
            "range": "stddev: 0.000032150436157553314",
            "extra": "mean: 152.63251470541266 usec\nrounds: 3128"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.310956880914475,
            "unit": "iter/sec",
            "range": "stddev: 0.0020257224042216364",
            "extra": "mean: 762.8015952000169 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9268747377289944,
            "unit": "iter/sec",
            "range": "stddev: 0.0030236966061445198",
            "extra": "mean: 1.0788944387999777 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.9314825956577946,
            "unit": "iter/sec",
            "range": "stddev: 0.0007978234657723432",
            "extra": "mean: 341.1243175999857 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 35.398939676328595,
            "unit": "iter/sec",
            "range": "stddev: 0.02282208614341062",
            "extra": "mean: 28.249433715911657 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 344511.14129499474,
            "unit": "iter/sec",
            "range": "stddev: 2.509103729426824e-7",
            "extra": "mean: 2.9026637462029985 usec\nrounds: 67568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 107.40677933240472,
            "unit": "iter/sec",
            "range": "stddev: 0.003973250606860023",
            "extra": "mean: 9.310399271029059 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 244.5285853112634,
            "unit": "iter/sec",
            "range": "stddev: 0.00008105485983516575",
            "extra": "mean: 4.089501432836934 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 261.9274842820547,
            "unit": "iter/sec",
            "range": "stddev: 0.0001300393552649956",
            "extra": "mean: 3.8178505884596565 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 193.39449498692332,
            "unit": "iter/sec",
            "range": "stddev: 0.00010362486576488392",
            "extra": "mean: 5.17077800000262 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.380402878873234,
            "unit": "iter/sec",
            "range": "stddev: 0.0007923799595395827",
            "extra": "mean: 21.105772413047518 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.81492417010745,
            "unit": "iter/sec",
            "range": "stddev: 0.001112427353384235",
            "extra": "mean: 15.194122193552431 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 22779.604948560427,
            "unit": "iter/sec",
            "range": "stddev: 0.0000221505527464143",
            "extra": "mean: 43.89891757377451 usec\nrounds: 6151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 165.95692525347692,
            "unit": "iter/sec",
            "range": "stddev: 0.00007287850658592813",
            "extra": "mean: 6.025659962503127 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 788.8918089108228,
            "unit": "iter/sec",
            "range": "stddev: 0.00004081117350039918",
            "extra": "mean: 1.2676009418587348 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 41.6375731205702,
            "unit": "iter/sec",
            "range": "stddev: 0.012887768567332444",
            "extra": "mean: 24.016769591836997 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 88.81607992165863,
            "unit": "iter/sec",
            "range": "stddev: 0.0002413228483066041",
            "extra": "mean: 11.259222439023011 msec\nrounds: 41"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "6bac0fc2bec2434f5d2eb8b1c2b0328a0e5a80a3",
          "message": "fix: sort_index to satisfy pandas 1.4.x",
          "timestamp": "2022-02-14T09:40:04-05:00",
          "tree_id": "94fdc8c9dc570bdcb479cdc8c1b4401ca4a0b563",
          "url": "https://github.com/ibis-project/ibis/commit/6bac0fc2bec2434f5d2eb8b1c2b0328a0e5a80a3"
        },
        "date": 1644849956104,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 36.582663725082035,
            "unit": "iter/sec",
            "range": "stddev: 0.0013444496868747088",
            "extra": "mean: 27.335352272731683 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.554777542373394,
            "unit": "iter/sec",
            "range": "stddev: 0.0014366346743572337",
            "extra": "mean: 24.06462166667359 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 149.44816145351535,
            "unit": "iter/sec",
            "range": "stddev: 0.0008435698708669412",
            "extra": "mean: 6.691283387323851 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.1256365139359987,
            "unit": "iter/sec",
            "range": "stddev: 0.014395131464892304",
            "extra": "mean: 470.44731940002293 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 342502.1860798449,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031252784786766925",
            "extra": "mean: 2.9196893936521553 usec\nrounds: 27398"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 222.97526774579973,
            "unit": "iter/sec",
            "range": "stddev: 0.0006127152386694205",
            "extra": "mean: 4.48480232857053 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 69.32627234075353,
            "unit": "iter/sec",
            "range": "stddev: 0.002084229560393454",
            "extra": "mean: 14.42454593670903 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 384280.5395219386,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033747704379590718",
            "extra": "mean: 2.602265525191681 usec\nrounds: 67568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.05277798702768,
            "unit": "iter/sec",
            "range": "stddev: 0.001256676869275934",
            "extra": "mean: 10.98264129999933 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5543.006885919893,
            "unit": "iter/sec",
            "range": "stddev: 0.0006780308699804015",
            "extra": "mean: 180.40749733509386 usec\nrounds: 4691"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 147.33346826411747,
            "unit": "iter/sec",
            "range": "stddev: 0.0005208142599164188",
            "extra": "mean: 6.787324100776268 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6863748540279546,
            "unit": "iter/sec",
            "range": "stddev: 0.020429298679028145",
            "extra": "mean: 592.98796920001 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5457229718399476,
            "unit": "iter/sec",
            "range": "stddev: 0.06800218126171297",
            "extra": "mean: 1.8324315662000117 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 87.99700071021347,
            "unit": "iter/sec",
            "range": "stddev: 0.0008195310419325265",
            "extra": "mean: 11.36402368182003 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 34.0847192800637,
            "unit": "iter/sec",
            "range": "stddev: 0.017412916628829656",
            "extra": "mean: 29.338660288890928 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 82.7774623521442,
            "unit": "iter/sec",
            "range": "stddev: 0.0013241723750986875",
            "extra": "mean: 12.080582945945997 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 143.23882380086104,
            "unit": "iter/sec",
            "range": "stddev: 0.0006066602433260818",
            "extra": "mean: 6.98134746896734 msec\nrounds: 145"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5552407307914407,
            "unit": "iter/sec",
            "range": "stddev: 0.049606803683627805",
            "extra": "mean: 1.8010206106000168 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 230.45198068054188,
            "unit": "iter/sec",
            "range": "stddev: 0.000435620054268139",
            "extra": "mean: 4.3392987860070695 msec\nrounds: 243"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.447505560318366,
            "unit": "iter/sec",
            "range": "stddev: 0.0025748105659650702",
            "extra": "mean: 40.9039686086885 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 16112.038053994851,
            "unit": "iter/sec",
            "range": "stddev: 0.0000755514642315827",
            "extra": "mean: 62.06539462287691 usec\nrounds: 7364"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 75.92589981434149,
            "unit": "iter/sec",
            "range": "stddev: 0.0009463845416263768",
            "extra": "mean: 13.170736236847498 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.9903974311597793,
            "unit": "iter/sec",
            "range": "stddev: 0.07566251258502793",
            "extra": "mean: 1.0096956721999732 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 33.549888521381014,
            "unit": "iter/sec",
            "range": "stddev: 0.02156885119440712",
            "extra": "mean: 29.806358353849962 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 31.453727513230803,
            "unit": "iter/sec",
            "range": "stddev: 0.010389467272935634",
            "extra": "mean: 31.79273424999808 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09373836280525176,
            "unit": "iter/sec",
            "range": "stddev: 0.23741352620725703",
            "extra": "mean: 10.667990885200037 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 278.9235621338422,
            "unit": "iter/sec",
            "range": "stddev: 0.00030982473205178876",
            "extra": "mean: 3.5852116341470905 msec\nrounds: 123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 319804.78051043017,
            "unit": "iter/sec",
            "range": "stddev: 0.000003131504991117233",
            "extra": "mean: 3.1269076040825032 usec\nrounds: 65360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 747.6685213023366,
            "unit": "iter/sec",
            "range": "stddev: 0.00012711854503523638",
            "extra": "mean: 1.3374911093730901 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9640.831314935867,
            "unit": "iter/sec",
            "range": "stddev: 0.00009446239685500686",
            "extra": "mean: 103.7254949633617 usec\nrounds: 5956"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 81.04263971563753,
            "unit": "iter/sec",
            "range": "stddev: 0.0008713826327813802",
            "extra": "mean: 12.339183465750876 msec\nrounds: 73"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "772454164c92d8e48c7324b3a1e68048898afede",
          "message": "chore(conftest.py): remove breakpoint",
          "timestamp": "2022-02-14T10:30:13-05:00",
          "tree_id": "38605806a8361ad9e515ac757d8db84d7c6b3ba3",
          "url": "https://github.com/ibis-project/ibis/commit/772454164c92d8e48c7324b3a1e68048898afede"
        },
        "date": 1644853148287,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 74.74511036440204,
            "unit": "iter/sec",
            "range": "stddev: 0.00042054045234374374",
            "extra": "mean: 13.37880157143039 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 40.61775239955784,
            "unit": "iter/sec",
            "range": "stddev: 0.015337833263742261",
            "extra": "mean: 24.619776844444157 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 84.17583825031183,
            "unit": "iter/sec",
            "range": "stddev: 0.00010688394794543169",
            "extra": "mean: 11.87989357499859 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.2533600496085449,
            "unit": "iter/sec",
            "range": "stddev: 0.004568376930191513",
            "extra": "mean: 797.8553332000047 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 785.9127508232643,
            "unit": "iter/sec",
            "range": "stddev: 0.000020193294833946412",
            "extra": "mean: 1.2724058732378036 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.30592156855533,
            "unit": "iter/sec",
            "range": "stddev: 0.0010824863779975507",
            "extra": "mean: 24.20960390244054 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 82.2083842537717,
            "unit": "iter/sec",
            "range": "stddev: 0.00035309719803908825",
            "extra": "mean: 12.164209393935634 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 266.5787955253444,
            "unit": "iter/sec",
            "range": "stddev: 0.0029105194405691886",
            "extra": "mean: 3.751236095238967 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1519050792685282,
            "unit": "iter/sec",
            "range": "stddev: 0.037071241014717184",
            "extra": "mean: 6.583058346799999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 164.30559526274865,
            "unit": "iter/sec",
            "range": "stddev: 0.00010044799800340086",
            "extra": "mean: 6.086219999999718 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 106.80538455082676,
            "unit": "iter/sec",
            "range": "stddev: 0.00011086521837540728",
            "extra": "mean: 9.362823833325725 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 78.24141176760503,
            "unit": "iter/sec",
            "range": "stddev: 0.0003618483688187844",
            "extra": "mean: 12.780955473684829 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9010919765615598,
            "unit": "iter/sec",
            "range": "stddev: 0.005157515849760209",
            "extra": "mean: 1.1097646255999962 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10726.256962572315,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018322791067008681",
            "extra": "mean: 93.22916684630546 usec\nrounds: 5562"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 43.416282238987776,
            "unit": "iter/sec",
            "range": "stddev: 0.0179083570546365",
            "extra": "mean: 23.032833500008923 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 291.8987932927244,
            "unit": "iter/sec",
            "range": "stddev: 0.00008406428286874789",
            "extra": "mean: 3.425844926317224 msec\nrounds: 285"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 7265.118732068807,
            "unit": "iter/sec",
            "range": "stddev: 0.00004436721473985984",
            "extra": "mean: 137.64399962053216 usec\nrounds: 2636"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.246183812577954,
            "unit": "iter/sec",
            "range": "stddev: 0.0007041382436476607",
            "extra": "mean: 36.7023876400026 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0178154752414525,
            "unit": "iter/sec",
            "range": "stddev: 0.0025711202659223042",
            "extra": "mean: 495.5854547999934 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 50.095858759730945,
            "unit": "iter/sec",
            "range": "stddev: 0.000653775327175584",
            "extra": "mean: 19.961729866657958 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 105.59852870669394,
            "unit": "iter/sec",
            "range": "stddev: 0.000493000446711482",
            "extra": "mean: 9.46982890999891 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 325257.05670902494,
            "unit": "iter/sec",
            "range": "stddev: 2.2791943086166898e-7",
            "extra": "mean: 3.074491327315306 usec\nrounds: 30959"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 389663.16816258273,
            "unit": "iter/sec",
            "range": "stddev: 3.624665731677695e-7",
            "extra": "mean: 2.566319020387272 usec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.30788446551838,
            "unit": "iter/sec",
            "range": "stddev: 0.0004928355319441344",
            "extra": "mean: 21.13812552173786 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8884225457074177,
            "unit": "iter/sec",
            "range": "stddev: 0.009711605765347936",
            "extra": "mean: 1.1255905253999798 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 240.50871740424245,
            "unit": "iter/sec",
            "range": "stddev: 0.00018121056681310902",
            "extra": "mean: 4.157853448277383 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.88185163403226,
            "unit": "iter/sec",
            "range": "stddev: 0.001333496725484776",
            "extra": "mean: 346.9991266000079 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 331385.263005267,
            "unit": "iter/sec",
            "range": "stddev: 2.2480730974278566e-7",
            "extra": "mean: 3.0176356997025127 usec\nrounds: 73530"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 22982.731146556987,
            "unit": "iter/sec",
            "range": "stddev: 0.000015275308253653673",
            "extra": "mean: 43.51092973342329 usec\nrounds: 6703"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.75620281161207,
            "unit": "iter/sec",
            "range": "stddev: 0.000040937860160001275",
            "extra": "mean: 6.106638910957266 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 166.19412922632694,
            "unit": "iter/sec",
            "range": "stddev: 0.004999251125183321",
            "extra": "mean: 6.017059715979362 msec\nrounds: 169"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "19dbe9c99e04b4ba226cf6604d0a5ef3a585ee94",
          "message": "chore(deps): remove typing-extensions dependency",
          "timestamp": "2022-02-14T12:15:42-05:00",
          "tree_id": "ed32bf4e077de70a615d25743c36884adca62005",
          "url": "https://github.com/ibis-project/ibis/commit/19dbe9c99e04b4ba226cf6604d0a5ef3a585ee94"
        },
        "date": 1644859789449,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.508505570783459,
            "unit": "iter/sec",
            "range": "stddev: 0.0024317739615847054",
            "extra": "mean: 662.9077275999975 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 116.6643368550149,
            "unit": "iter/sec",
            "range": "stddev: 0.004422369535244576",
            "extra": "mean: 8.57159974468251 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 54.603234808555946,
            "unit": "iter/sec",
            "range": "stddev: 0.000831757346445497",
            "extra": "mean: 18.31393329545573 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 867.8912138868831,
            "unit": "iter/sec",
            "range": "stddev: 0.000016268207651492383",
            "extra": "mean: 1.1522181397844355 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 8372.302145710957,
            "unit": "iter/sec",
            "range": "stddev: 0.00004255435699997989",
            "extra": "mean: 119.44146097406309 usec\nrounds: 3139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 209.15191917177688,
            "unit": "iter/sec",
            "range": "stddev: 0.00016217827329405627",
            "extra": "mean: 4.781213598038745 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 52.5709559885738,
            "unit": "iter/sec",
            "range": "stddev: 0.000378557098636261",
            "extra": "mean: 19.021910125000357 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 191.5692517865351,
            "unit": "iter/sec",
            "range": "stddev: 0.00012504572916468426",
            "extra": "mean: 5.2200443999974295 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 87.06743991087109,
            "unit": "iter/sec",
            "range": "stddev: 0.0005676679180843186",
            "extra": "mean: 11.48534975903365 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 334.6024426103875,
            "unit": "iter/sec",
            "range": "stddev: 0.00008117149778119797",
            "extra": "mean: 2.9886213387999803 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 45.42243523393374,
            "unit": "iter/sec",
            "range": "stddev: 0.016088959510906685",
            "extra": "mean: 22.015552333330863 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12709.971217955925,
            "unit": "iter/sec",
            "range": "stddev: 0.000004549260824601623",
            "extra": "mean: 78.67838430564318 usec\nrounds: 6703"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 1.007762502304124,
            "unit": "iter/sec",
            "range": "stddev: 0.00395494699840309",
            "extra": "mean: 992.2972899999991 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 45.11527410738571,
            "unit": "iter/sec",
            "range": "stddev: 0.019106607685623327",
            "extra": "mean: 22.165442187489504 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 329.8616660195943,
            "unit": "iter/sec",
            "range": "stddev: 0.00013577881543170363",
            "extra": "mean: 3.031573847506726 msec\nrounds: 341"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 195.33198124816212,
            "unit": "iter/sec",
            "range": "stddev: 0.0001503593639160211",
            "extra": "mean: 5.11948936170128 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 284.2259830483691,
            "unit": "iter/sec",
            "range": "stddev: 0.0001092652405136525",
            "extra": "mean: 3.5183271749994156 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 47.69550173568043,
            "unit": "iter/sec",
            "range": "stddev: 0.0015943419453406458",
            "extra": "mean: 20.966337780485325 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 29.58553373831715,
            "unit": "iter/sec",
            "range": "stddev: 0.001298431669162286",
            "extra": "mean: 33.80030283871029 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 445623.7455484004,
            "unit": "iter/sec",
            "range": "stddev: 4.895005282132835e-7",
            "extra": "mean: 2.244045587762305 usec\nrounds: 69931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 118.45724829074322,
            "unit": "iter/sec",
            "range": "stddev: 0.000244508496031863",
            "extra": "mean: 8.441864169810742 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 381797.52150479314,
            "unit": "iter/sec",
            "range": "stddev: 5.822180701313715e-7",
            "extra": "mean: 2.6191893442855827 usec\nrounds: 71943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.418801473111235,
            "unit": "iter/sec",
            "range": "stddev: 0.006842645822809857",
            "extra": "mean: 413.4278944000016 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 386429.5584633873,
            "unit": "iter/sec",
            "range": "stddev: 5.40402271175282e-7",
            "extra": "mean: 2.587793759815985 usec\nrounds: 31153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.302302905049502,
            "unit": "iter/sec",
            "range": "stddev: 0.002454029877414186",
            "extra": "mean: 302.8189808000093 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 98.58620120550383,
            "unit": "iter/sec",
            "range": "stddev: 0.00021630924546364556",
            "extra": "mean: 10.143407371133927 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 97.71557345988792,
            "unit": "iter/sec",
            "range": "stddev: 0.0002381107493027146",
            "extra": "mean: 10.233783260868835 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 86.12944207933965,
            "unit": "iter/sec",
            "range": "stddev: 0.000534785603863944",
            "extra": "mean: 11.610431646344956 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 26944.228382400866,
            "unit": "iter/sec",
            "range": "stddev: 0.000010777353999137045",
            "extra": "mean: 37.11369966909756 usec\nrounds: 7252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16830918159059557,
            "unit": "iter/sec",
            "range": "stddev: 0.06122119688456794",
            "extra": "mean: 5.941446512599976 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 1.0035726060774992,
            "unit": "iter/sec",
            "range": "stddev: 0.0018199837080675604",
            "extra": "mean: 996.4401120000048 msec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "a704dc29f7b50481a7236c44479a919eeb6f5946",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-15T01:17:31Z",
          "tree_id": "99134869b19c442d10d5ff0fd51b630a16f60399",
          "url": "https://github.com/ibis-project/ibis/commit/a704dc29f7b50481a7236c44479a919eeb6f5946"
        },
        "date": 1644888063188,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 259.66883291987267,
            "unit": "iter/sec",
            "range": "stddev: 0.00003998211710671013",
            "extra": "mean: 3.8510590152672464 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 208.88827027352806,
            "unit": "iter/sec",
            "range": "stddev: 0.00010241965062419818",
            "extra": "mean: 4.787248219780619 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 332188.00854588,
            "unit": "iter/sec",
            "range": "stddev: 2.562496460594833e-7",
            "extra": "mean: 3.0103434629606314 usec\nrounds: 60976"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 27.15967945255469,
            "unit": "iter/sec",
            "range": "stddev: 0.016746019282918596",
            "extra": "mean: 36.819285800000046 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 29.399415673063984,
            "unit": "iter/sec",
            "range": "stddev: 0.028508574231678383",
            "extra": "mean: 34.01428147826112 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 131.65196302749254,
            "unit": "iter/sec",
            "range": "stddev: 0.0001416426184147867",
            "extra": "mean: 7.59578495454088 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8368456251833458,
            "unit": "iter/sec",
            "range": "stddev: 0.0016778564555689375",
            "extra": "mean: 544.4115642000042 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 36.19284576098481,
            "unit": "iter/sec",
            "range": "stddev: 0.000985242233634327",
            "extra": "mean: 27.629769888887285 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 91.6212265366878,
            "unit": "iter/sec",
            "range": "stddev: 0.0006612332327200502",
            "extra": "mean: 10.91450134210516 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 300068.3772392777,
            "unit": "iter/sec",
            "range": "stddev: 3.149143194162624e-7",
            "extra": "mean: 3.3325737593554865 usec\nrounds: 23475"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6107.660330998161,
            "unit": "iter/sec",
            "range": "stddev: 0.00005132341291013975",
            "extra": "mean: 163.72881689649762 usec\nrounds: 2758"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 72.2980740959341,
            "unit": "iter/sec",
            "range": "stddev: 0.00009692274358369862",
            "extra": "mean: 13.831627086954976 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.69983077128487,
            "unit": "iter/sec",
            "range": "stddev: 0.0001881330785143318",
            "extra": "mean: 14.556076612898726 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.73705680517311,
            "unit": "iter/sec",
            "range": "stddev: 0.0009617038354643882",
            "extra": "mean: 26.499151885711367 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.40982918763531,
            "unit": "iter/sec",
            "range": "stddev: 0.0010161000983379587",
            "extra": "mean: 46.70751883333679 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 33.51545225776674,
            "unit": "iter/sec",
            "range": "stddev: 0.022451175384921945",
            "extra": "mean: 29.83698361904885 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 85.05619620355918,
            "unit": "iter/sec",
            "range": "stddev: 0.0004037631207382206",
            "extra": "mean: 11.75693299999883 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9120.567310622302,
            "unit": "iter/sec",
            "range": "stddev: 0.000015779941312626844",
            "extra": "mean: 109.64230249530053 usec\nrounds: 4929"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 20062.249801305305,
            "unit": "iter/sec",
            "range": "stddev: 0.000022292735039701166",
            "extra": "mean: 49.8448583735079 usec\nrounds: 5804"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7356033879203272,
            "unit": "iter/sec",
            "range": "stddev: 0.028743581593119443",
            "extra": "mean: 1.3594282141999998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.1096995840905517,
            "unit": "iter/sec",
            "range": "stddev: 0.006544193218387002",
            "extra": "mean: 901.1447911999937 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1284261704824979,
            "unit": "iter/sec",
            "range": "stddev: 0.04130956790110312",
            "extra": "mean: 7.786574934400005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 57.93978340266989,
            "unit": "iter/sec",
            "range": "stddev: 0.0004452458558866885",
            "extra": "mean: 17.259298210526616 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 154.35473247268766,
            "unit": "iter/sec",
            "range": "stddev: 0.00017156297694338117",
            "extra": "mean: 6.4785833513523485 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7390438481097457,
            "unit": "iter/sec",
            "range": "stddev: 0.009439696217302422",
            "extra": "mean: 1.3530996876000017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.85244689952444,
            "unit": "iter/sec",
            "range": "stddev: 0.00009864898815465235",
            "extra": "mean: 7.0002301094873935 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.475093915767965,
            "unit": "iter/sec",
            "range": "stddev: 0.0016076660138346105",
            "extra": "mean: 404.02507299999684 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.951576540786796,
            "unit": "iter/sec",
            "range": "stddev: 0.0009475366743189941",
            "extra": "mean: 16.96307475862211 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 673.6119745964162,
            "unit": "iter/sec",
            "range": "stddev: 0.000017963463824443196",
            "extra": "mean: 1.4845341794868387 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 241.48548755037424,
            "unit": "iter/sec",
            "range": "stddev: 0.0001433557668005341",
            "extra": "mean: 4.141035596565191 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 302759.8466312099,
            "unit": "iter/sec",
            "range": "stddev: 2.3233943165330211e-7",
            "extra": "mean: 3.3029479012059832 usec\nrounds: 69445"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gerry.manoim@twosigma.com",
            "name": "gerrymanoim",
            "username": "gerrymanoim"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "e0750be5ee37bb13221ae2a25f4d45edee2106f5",
          "message": "fix: change TimestampType to Timestamp\n\nIn datafusion backend.\n\nI believe this is the correct type as I can't find `TimestampType` in `ibis.expr.datatypes`.",
          "timestamp": "2022-02-15T05:34:34-05:00",
          "tree_id": "ea83bfca209b2a2f17a7c10e6cf51b4f199ee107",
          "url": "https://github.com/ibis-project/ibis/commit/e0750be5ee37bb13221ae2a25f4d45edee2106f5"
        },
        "date": 1644921765100,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 221.650654352222,
            "unit": "iter/sec",
            "range": "stddev: 0.0004909179099342231",
            "extra": "mean: 4.511604095744801 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 341897.1136577668,
            "unit": "iter/sec",
            "range": "stddev: 0.000002382916450738845",
            "extra": "mean: 2.924856514000826 usec\nrounds: 31348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 36.0808896941199,
            "unit": "iter/sec",
            "range": "stddev: 0.00268848957650919",
            "extra": "mean: 27.715502818184945 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 153.73418310250338,
            "unit": "iter/sec",
            "range": "stddev: 0.000567184313661629",
            "extra": "mean: 6.5047342095234795 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 686.9291507016605,
            "unit": "iter/sec",
            "range": "stddev: 0.0002713791767253266",
            "extra": "mean: 1.4557542054789125 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 259.5745472977628,
            "unit": "iter/sec",
            "range": "stddev: 0.0004347411186656207",
            "extra": "mean: 3.852457840763876 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9230.029738435738,
            "unit": "iter/sec",
            "range": "stddev: 0.0000400380342610886",
            "extra": "mean: 108.34201279285101 usec\nrounds: 5550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 35.59992378451967,
            "unit": "iter/sec",
            "range": "stddev: 0.0178926116660078",
            "extra": "mean: 28.08994777777703 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 136.57107814720388,
            "unit": "iter/sec",
            "range": "stddev: 0.001089456704589962",
            "extra": "mean: 7.32219452000038 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 33.31855339658086,
            "unit": "iter/sec",
            "range": "stddev: 0.0017269661669494021",
            "extra": "mean: 30.013307843749892 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.22402164876765,
            "unit": "iter/sec",
            "range": "stddev: 0.0013175628426954893",
            "extra": "mean: 23.135283619045445 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 334998.4485865337,
            "unit": "iter/sec",
            "range": "stddev: 0.000004881181669809697",
            "extra": "mean: 2.9850884510639433 usec\nrounds: 79366"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 388613.83811878547,
            "unit": "iter/sec",
            "range": "stddev: 0.000005037527906191608",
            "extra": "mean: 2.5732485617105985 usec\nrounds: 78741"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 89.53548965582473,
            "unit": "iter/sec",
            "range": "stddev: 0.0013725399894808864",
            "extra": "mean: 11.168755583333597 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5581685070588233,
            "unit": "iter/sec",
            "range": "stddev: 0.03979010738657719",
            "extra": "mean: 1.7915736688000095 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 77.90341072702988,
            "unit": "iter/sec",
            "range": "stddev: 0.0008104257114902695",
            "extra": "mean: 12.83640845333404 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.7888879492695535,
            "unit": "iter/sec",
            "range": "stddev: 0.01119332417494694",
            "extra": "mean: 559.0065047999929 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 17849.45298296097,
            "unit": "iter/sec",
            "range": "stddev: 0.00004452490330477574",
            "extra": "mean: 56.024125834813916 usec\nrounds: 6739"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5621123224226539,
            "unit": "iter/sec",
            "range": "stddev: 0.03791951895157199",
            "extra": "mean: 1.779003875400008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 214.78201165841145,
            "unit": "iter/sec",
            "range": "stddev: 0.0037400586062745953",
            "extra": "mean: 4.65588338743375 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.4312580081262127,
            "unit": "iter/sec",
            "range": "stddev: 0.01091099545510171",
            "extra": "mean: 411.30969920000666 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 36.064830534638126,
            "unit": "iter/sec",
            "range": "stddev: 0.01680065279969253",
            "extra": "mean: 27.72784414000114 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.086161243968,
            "unit": "iter/sec",
            "range": "stddev: 0.004212134860932653",
            "extra": "mean: 6.988796060402777 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.718847451477675,
            "unit": "iter/sec",
            "range": "stddev: 0.0029495183833549727",
            "extra": "mean: 42.16056459091145 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09361038832363726,
            "unit": "iter/sec",
            "range": "stddev: 0.12695319201741975",
            "extra": "mean: 10.682575063600002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 74.38583594393799,
            "unit": "iter/sec",
            "range": "stddev: 0.0013659819579418787",
            "extra": "mean: 13.443419534246615 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.0597254761019395,
            "unit": "iter/sec",
            "range": "stddev: 0.031670778055774215",
            "extra": "mean: 943.6406149999982 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 83.04450654869596,
            "unit": "iter/sec",
            "range": "stddev: 0.0008890569323451318",
            "extra": "mean: 12.04173570967775 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 73.58378564631245,
            "unit": "iter/sec",
            "range": "stddev: 0.0009419326408794096",
            "extra": "mean: 13.58995043835603 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5538.854101611297,
            "unit": "iter/sec",
            "range": "stddev: 0.00008559428989824096",
            "extra": "mean: 180.54275878274026 usec\nrounds: 2761"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 92.47700380530104,
            "unit": "iter/sec",
            "range": "stddev: 0.0007662597322105652",
            "extra": "mean: 10.813499127906189 msec\nrounds: 86"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "19499417e58494cfe1fc3f655469b1b593db934c",
          "message": "ci: fix conda lock",
          "timestamp": "2022-02-15T10:08:42-05:00",
          "tree_id": "e324d923b58f5f1ef7aca00de33c0cf653eff9f4",
          "url": "https://github.com/ibis-project/ibis/commit/19499417e58494cfe1fc3f655469b1b593db934c"
        },
        "date": 1644937921421,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 331303.33365594706,
            "unit": "iter/sec",
            "range": "stddev: 1.9481509284295446e-7",
            "extra": "mean: 3.018381943112239 usec\nrounds: 32154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.609318577008185,
            "unit": "iter/sec",
            "range": "stddev: 0.0004942146599766588",
            "extra": "mean: 39.048286153845225 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.53481841147106,
            "unit": "iter/sec",
            "range": "stddev: 0.00006490924811566436",
            "extra": "mean: 6.114905741258679 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.866596933141705,
            "unit": "iter/sec",
            "range": "stddev: 0.0014886837031956495",
            "extra": "mean: 348.84569519999786 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 297.20951656702437,
            "unit": "iter/sec",
            "range": "stddev: 0.00009243962111167796",
            "extra": "mean: 3.3646298124995866 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.40296374211053,
            "unit": "iter/sec",
            "range": "stddev: 0.00030017603398057593",
            "extra": "mean: 21.550347636362364 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 40.770622801131864,
            "unit": "iter/sec",
            "range": "stddev: 0.0012070611858652626",
            "extra": "mean: 24.527464416664202 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10431.181637105632,
            "unit": "iter/sec",
            "range": "stddev: 0.000004786332425961532",
            "extra": "mean: 95.86641617310315 usec\nrounds: 5911"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0315225164929474,
            "unit": "iter/sec",
            "range": "stddev: 0.003440499233670607",
            "extra": "mean: 492.24165220000486 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 245.2661732806937,
            "unit": "iter/sec",
            "range": "stddev: 0.00007066082580174444",
            "extra": "mean: 4.077203091742923 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 99.61740671510373,
            "unit": "iter/sec",
            "range": "stddev: 0.006350594197574528",
            "extra": "mean: 10.038406268293096 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 34.385659362514126,
            "unit": "iter/sec",
            "range": "stddev: 0.029249098181014725",
            "extra": "mean: 29.08189107143195 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 7220.357742199525,
            "unit": "iter/sec",
            "range": "stddev: 0.00004564380178556702",
            "extra": "mean: 138.49729275261254 usec\nrounds: 3146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.912432287555943,
            "unit": "iter/sec",
            "range": "stddev: 0.004518359268424769",
            "extra": "mean: 1.0959717379999971 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 182.18659259526967,
            "unit": "iter/sec",
            "range": "stddev: 0.00009973833961115876",
            "extra": "mean: 5.488878109826201 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 81.6710143826529,
            "unit": "iter/sec",
            "range": "stddev: 0.00018273818616694668",
            "extra": "mean: 12.24424610810763 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23170.37899754595,
            "unit": "iter/sec",
            "range": "stddev: 0.00002062204860542607",
            "extra": "mean: 43.15855170543016 usec\nrounds: 5541"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15149382512341364,
            "unit": "iter/sec",
            "range": "stddev: 0.030761835384080796",
            "extra": "mean: 6.600929108399998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.2625666525822845,
            "unit": "iter/sec",
            "range": "stddev: 0.0021418639454293584",
            "extra": "mean: 792.0373929999926 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 389744.6467152442,
            "unit": "iter/sec",
            "range": "stddev: 3.4914233478159945e-7",
            "extra": "mean: 2.5657825153673537 usec\nrounds: 55866"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 70.0394057541881,
            "unit": "iter/sec",
            "range": "stddev: 0.0009991410807747112",
            "extra": "mean: 14.27767681966953 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 319121.4439384331,
            "unit": "iter/sec",
            "range": "stddev: 1.9980595124035467e-7",
            "extra": "mean: 3.133603269208465 usec\nrounds: 28571"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 97.08987084635218,
            "unit": "iter/sec",
            "range": "stddev: 0.00044570915829650744",
            "extra": "mean: 10.299735608697347 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 792.5530098857846,
            "unit": "iter/sec",
            "range": "stddev: 0.000015838966301258475",
            "extra": "mean: 1.2617452555559794 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.40608523104171,
            "unit": "iter/sec",
            "range": "stddev: 0.002450057696704893",
            "extra": "mean: 23.038244400000707 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 72.79130034430841,
            "unit": "iter/sec",
            "range": "stddev: 0.0005082226311590219",
            "extra": "mean: 13.73790542647162 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 36.82224876860771,
            "unit": "iter/sec",
            "range": "stddev: 0.02377435430442824",
            "extra": "mean: 27.15749400000078 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9099516066715696,
            "unit": "iter/sec",
            "range": "stddev: 0.007040558232833027",
            "extra": "mean: 1.0989595409999993 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 166.093747872048,
            "unit": "iter/sec",
            "range": "stddev: 0.00007437858477657337",
            "extra": "mean: 6.020696220127203 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 278.02032323591783,
            "unit": "iter/sec",
            "range": "stddev: 0.00012308994423306454",
            "extra": "mean: 3.59685935316116 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 81.86930862252977,
            "unit": "iter/sec",
            "range": "stddev: 0.0005128883962057203",
            "extra": "mean: 12.214589530866126 msec\nrounds: 81"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gerrymanoim@gmail.com",
            "name": "gerrymanoim",
            "username": "gerrymanoim"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "1f96b75e6003463428a43f982c22201a6845b633",
          "message": "refactor: fix warnings in dask/pandas trace code",
          "timestamp": "2022-02-15T15:13:51-05:00",
          "tree_id": "a27baacf4609cdf26bf819caaace8916f83bdbdc",
          "url": "https://github.com/ibis-project/ibis/commit/1f96b75e6003463428a43f982c22201a6845b633"
        },
        "date": 1644956472328,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 89.56926448603814,
            "unit": "iter/sec",
            "range": "stddev: 0.000632582411985593",
            "extra": "mean: 11.164544062499004 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 192.3668208280479,
            "unit": "iter/sec",
            "range": "stddev: 0.0001277859618398921",
            "extra": "mean: 5.198401656249629 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 394528.0139115172,
            "unit": "iter/sec",
            "range": "stddev: 5.756692897293774e-7",
            "extra": "mean: 2.53467425566458 usec\nrounds: 34963"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 433369.82853683725,
            "unit": "iter/sec",
            "range": "stddev: 4.89558331418698e-7",
            "extra": "mean: 2.307497970904539 usec\nrounds: 84027"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17286126338520588,
            "unit": "iter/sec",
            "range": "stddev: 0.06232059223603045",
            "extra": "mean: 5.784986065800001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 50.802618208850916,
            "unit": "iter/sec",
            "range": "stddev: 0.011843891693638182",
            "extra": "mean: 19.684024864407053 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 54.16042900102565,
            "unit": "iter/sec",
            "range": "stddev: 0.00034821761670861614",
            "extra": "mean: 18.463664680002125 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 58.87400957585951,
            "unit": "iter/sec",
            "range": "stddev: 0.000650506843349477",
            "extra": "mean: 16.98542374137936 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.550403873495802,
            "unit": "iter/sec",
            "range": "stddev: 0.006902779985875469",
            "extra": "mean: 644.9932285999978 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 197.08873587209828,
            "unit": "iter/sec",
            "range": "stddev: 0.0001217448152547075",
            "extra": "mean: 5.073856684782609 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.526777024936893,
            "unit": "iter/sec",
            "range": "stddev: 0.0018312437090941974",
            "extra": "mean: 283.54500240000107 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.43022969483164,
            "unit": "iter/sec",
            "range": "stddev: 0.018863945662952738",
            "extra": "mean: 411.4837383999941 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 966.7233287359104,
            "unit": "iter/sec",
            "range": "stddev: 0.000036783255930575984",
            "extra": "mean: 1.0344221250019925 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 47.59430995517445,
            "unit": "iter/sec",
            "range": "stddev: 0.015962276691897443",
            "extra": "mean: 21.010914980001303 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 32.1491516541517,
            "unit": "iter/sec",
            "range": "stddev: 0.0006914003446112662",
            "extra": "mean: 31.105019838707356 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 124.46339778788044,
            "unit": "iter/sec",
            "range": "stddev: 0.00020940226401426648",
            "extra": "mean: 8.034490603448516 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 128.97520246074,
            "unit": "iter/sec",
            "range": "stddev: 0.00042894559524976974",
            "extra": "mean: 7.753428418182941 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 354.72699907636377,
            "unit": "iter/sec",
            "range": "stddev: 0.00008485067093823661",
            "extra": "mean: 2.819069319797463 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 1.0409902348988773,
            "unit": "iter/sec",
            "range": "stddev: 0.008380795219769829",
            "extra": "mean: 960.623804599993 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23544.992760061003,
            "unit": "iter/sec",
            "range": "stddev: 0.0005778469922727639",
            "extra": "mean: 42.471875450999676 usec\nrounds: 7210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 8716.030377442998,
            "unit": "iter/sec",
            "range": "stddev: 0.000039232950312213415",
            "extra": "mean: 114.7311283572382 usec\nrounds: 3872"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12636.53903216241,
            "unit": "iter/sec",
            "range": "stddev: 0.000012240428033333009",
            "extra": "mean: 79.13559222622654 usec\nrounds: 4348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 394554.9679703005,
            "unit": "iter/sec",
            "range": "stddev: 5.563347977931255e-7",
            "extra": "mean: 2.534501099160595 usec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 215.81814006840608,
            "unit": "iter/sec",
            "range": "stddev: 0.00013949154348778114",
            "extra": "mean: 4.633530803680536 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 92.4563387464558,
            "unit": "iter/sec",
            "range": "stddev: 0.00019505047552699376",
            "extra": "mean: 10.815916069771191 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 100.32977204032596,
            "unit": "iter/sec",
            "range": "stddev: 0.00020376194270831864",
            "extra": "mean: 9.967131188118977 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 289.1736451874742,
            "unit": "iter/sec",
            "range": "stddev: 0.00010870944282523031",
            "extra": "mean: 3.45812980070051 msec\nrounds: 286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 1.0336105065472763,
            "unit": "iter/sec",
            "range": "stddev: 0.008762695459579284",
            "extra": "mean: 967.4824255999965 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 102.13968576185196,
            "unit": "iter/sec",
            "range": "stddev: 0.0001490357441416789",
            "extra": "mean: 9.790513770833323 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.95765490818796,
            "unit": "iter/sec",
            "range": "stddev: 0.008052378376225357",
            "extra": "mean: 21.295782380001924 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 327.7643029350159,
            "unit": "iter/sec",
            "range": "stddev: 0.00013330139696562628",
            "extra": "mean: 3.050972882175838 msec\nrounds: 331"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "730dd557898c1d78e40f1a5fc43115a556920a94",
          "message": "chore(deps/poetry2nix): update",
          "timestamp": "2022-02-16T01:09:10Z",
          "tree_id": "9deb872c4160cc7ada005212be21917bbdf0c2fb",
          "url": "https://github.com/ibis-project/ibis/commit/730dd557898c1d78e40f1a5fc43115a556920a94"
        },
        "date": 1644973929050,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 227.17411519583618,
            "unit": "iter/sec",
            "range": "stddev: 0.0008466839111550442",
            "extra": "mean: 4.4019099585265105 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.764970007507281,
            "unit": "iter/sec",
            "range": "stddev: 0.012477202475626023",
            "extra": "mean: 1.3072407939999948 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 41.698496643208756,
            "unit": "iter/sec",
            "range": "stddev: 0.0009345631712297847",
            "extra": "mean: 23.981679928570408 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 146.21869893932845,
            "unit": "iter/sec",
            "range": "stddev: 0.0001613317703212727",
            "extra": "mean: 6.839070565215034 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.142141750689118,
            "unit": "iter/sec",
            "range": "stddev: 0.013027497273897555",
            "extra": "mean: 875.5480652000017 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5461.179706737306,
            "unit": "iter/sec",
            "range": "stddev: 0.0008723639749579279",
            "extra": "mean: 183.1106196279034 usec\nrounds: 2955"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 35.01515127772063,
            "unit": "iter/sec",
            "range": "stddev: 0.0028563489817466925",
            "extra": "mean: 28.559065533333218 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 295184.07364744943,
            "unit": "iter/sec",
            "range": "stddev: 0.000005788949022252159",
            "extra": "mean: 3.3877166462386494 usec\nrounds: 65360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 61.91989054403379,
            "unit": "iter/sec",
            "range": "stddev: 0.0012592007575644082",
            "extra": "mean: 16.14989934920603 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 153.49870708688306,
            "unit": "iter/sec",
            "range": "stddev: 0.0008627742942671685",
            "extra": "mean: 6.514712853144632 msec\nrounds: 143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.24791269647168,
            "unit": "iter/sec",
            "range": "stddev: 0.00139589009110867",
            "extra": "mean: 24.846008972973767 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 206.37234766214516,
            "unit": "iter/sec",
            "range": "stddev: 0.0007114932564697766",
            "extra": "mean: 4.845610428569204 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 33.4257679801469,
            "unit": "iter/sec",
            "range": "stddev: 0.021368896712689725",
            "extra": "mean: 29.917038872343817 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9349.002708400423,
            "unit": "iter/sec",
            "range": "stddev: 0.000012955268323012154",
            "extra": "mean: 106.96328059692004 usec\nrounds: 335"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 70.19600900775251,
            "unit": "iter/sec",
            "range": "stddev: 0.0010752667885722655",
            "extra": "mean: 14.245824144924809 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 85.4912871555362,
            "unit": "iter/sec",
            "range": "stddev: 0.0007555837795230506",
            "extra": "mean: 11.697098421043512 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.4169418337622703,
            "unit": "iter/sec",
            "range": "stddev: 0.006267997122596924",
            "extra": "mean: 413.74599340000486 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.52378138514435,
            "unit": "iter/sec",
            "range": "stddev: 0.0009728339364679424",
            "extra": "mean: 14.593473678567241 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7257059177461478,
            "unit": "iter/sec",
            "range": "stddev: 0.06449313622986932",
            "extra": "mean: 1.3779686448000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 14724.030952981908,
            "unit": "iter/sec",
            "range": "stddev: 0.0010360902100616267",
            "extra": "mean: 67.91618431075631 usec\nrounds: 6017"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 343429.7833234442,
            "unit": "iter/sec",
            "range": "stddev: 0.00000651158114274528",
            "extra": "mean: 2.9118033687200455 usec\nrounds: 55866"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.503846124053524,
            "unit": "iter/sec",
            "range": "stddev: 0.0012226042027512003",
            "extra": "mean: 15.99901545282935 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.13018203968704178,
            "unit": "iter/sec",
            "range": "stddev: 0.07528669574009803",
            "extra": "mean: 7.681551175599987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.806303230845483,
            "unit": "iter/sec",
            "range": "stddev: 0.0006886669887316186",
            "extra": "mean: 40.31233476000352 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.81935442055401,
            "unit": "iter/sec",
            "range": "stddev: 0.011042416369736522",
            "extra": "mean: 549.6455163999826 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 96.1917799774465,
            "unit": "iter/sec",
            "range": "stddev: 0.0006031686555038004",
            "extra": "mean: 10.395898695652205 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 147.54451672755766,
            "unit": "iter/sec",
            "range": "stddev: 0.00022099292632391077",
            "extra": "mean: 6.777615476192243 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 31.385113550017355,
            "unit": "iter/sec",
            "range": "stddev: 0.02656700867328003",
            "extra": "mean: 31.86223935135156 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 308485.0670502093,
            "unit": "iter/sec",
            "range": "stddev: 6.156742855049737e-7",
            "extra": "mean: 3.2416479979474633 usec\nrounds: 26247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 271.1426872320301,
            "unit": "iter/sec",
            "range": "stddev: 0.0001304067920411335",
            "extra": "mean: 3.6880950403218913 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 733.9332682325162,
            "unit": "iter/sec",
            "range": "stddev: 0.00004541842286762164",
            "extra": "mean: 1.362521694115645 msec\nrounds: 85"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "447a824cacc33a212c3aa97ea084643623453f3c",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-16T02:14:49Z",
          "tree_id": "c9fd6b38b31d762db2cedf17eed6bc5640ffc65d",
          "url": "https://github.com/ibis-project/ibis/commit/447a824cacc33a212c3aa97ea084643623453f3c"
        },
        "date": 1644977831903,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 34.35852111642164,
            "unit": "iter/sec",
            "range": "stddev: 0.0017089748174304383",
            "extra": "mean: 29.104861545453723 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 325795.8501044135,
            "unit": "iter/sec",
            "range": "stddev: 2.726761508787331e-7",
            "extra": "mean: 3.0694068069912874 usec\nrounds: 59881"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23079.489994936946,
            "unit": "iter/sec",
            "range": "stddev: 0.000014145431857989857",
            "extra": "mean: 43.32851376782479 usec\nrounds: 5738"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.253041852762461,
            "unit": "iter/sec",
            "range": "stddev: 0.005402299639270465",
            "extra": "mean: 798.0579401999989 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 238.76208169341987,
            "unit": "iter/sec",
            "range": "stddev: 0.00007170315115626631",
            "extra": "mean: 4.188269732394277 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 151.35152771238657,
            "unit": "iter/sec",
            "range": "stddev: 0.005659080939413528",
            "extra": "mean: 6.607135158227809 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 31.903306756010245,
            "unit": "iter/sec",
            "range": "stddev: 0.0033021591579642726",
            "extra": "mean: 31.344713187500872 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10436.781692488981,
            "unit": "iter/sec",
            "range": "stddev: 0.000003080530211767621",
            "extra": "mean: 95.81497720889075 usec\nrounds: 351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 62.419824043784025,
            "unit": "iter/sec",
            "range": "stddev: 0.0009144305829404505",
            "extra": "mean: 16.020551408452476 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 818.0533672771746,
            "unit": "iter/sec",
            "range": "stddev: 0.0000294051874076467",
            "extra": "mean: 1.2224141358019467 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 87.49387766561136,
            "unit": "iter/sec",
            "range": "stddev: 0.0011026851332354452",
            "extra": "mean: 11.429371136365129 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0565753344851108,
            "unit": "iter/sec",
            "range": "stddev: 0.0018320053554076866",
            "extra": "mean: 486.24525600000084 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 77.60878419507681,
            "unit": "iter/sec",
            "range": "stddev: 0.0001898743551743929",
            "extra": "mean: 12.8851393611116 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 323710.8017785139,
            "unit": "iter/sec",
            "range": "stddev: 5.253762588373891e-7",
            "extra": "mean: 3.0891771127372203 usec\nrounds: 22624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14824958441441582,
            "unit": "iter/sec",
            "range": "stddev: 0.05071741727050948",
            "extra": "mean: 6.745381472399998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 290.9457003158454,
            "unit": "iter/sec",
            "range": "stddev: 0.00016967846052581855",
            "extra": "mean: 3.437067462809789 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.086773183681025,
            "unit": "iter/sec",
            "range": "stddev: 0.00046627980572067177",
            "extra": "mean: 25.584102205129238 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.781581944966544,
            "unit": "iter/sec",
            "range": "stddev: 0.002279503923106892",
            "extra": "mean: 359.5076542000015 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 47.032624440261586,
            "unit": "iter/sec",
            "range": "stddev: 0.003402543906392949",
            "extra": "mean: 21.26183711627975 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 275.3184811765659,
            "unit": "iter/sec",
            "range": "stddev: 0.00017525621544385564",
            "extra": "mean: 3.6321571865663635 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.057728173844662,
            "unit": "iter/sec",
            "range": "stddev: 0.001761350830729642",
            "extra": "mean: 47.48850359090862 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 100.702378952702,
            "unit": "iter/sec",
            "range": "stddev: 0.0007302679916807273",
            "extra": "mean: 9.930252000001717 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7854200886788238,
            "unit": "iter/sec",
            "range": "stddev: 0.007500486636747878",
            "extra": "mean: 1.2732040018000135 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 138.61330830523573,
            "unit": "iter/sec",
            "range": "stddev: 0.00009243229054119704",
            "extra": "mean: 7.214314500004093 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 32.20332565998335,
            "unit": "iter/sec",
            "range": "stddev: 0.028675540596551145",
            "extra": "mean: 31.052693456521627 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 81.67379681977519,
            "unit": "iter/sec",
            "range": "stddev: 0.00012964151447620047",
            "extra": "mean: 12.243828974997228 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 182.93029155870437,
            "unit": "iter/sec",
            "range": "stddev: 0.0005241665486149114",
            "extra": "mean: 5.466563199999541 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 7802.778732289073,
            "unit": "iter/sec",
            "range": "stddev: 0.00004644086972096104",
            "extra": "mean: 128.1594716843436 usec\nrounds: 2684"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 431546.0330288082,
            "unit": "iter/sec",
            "range": "stddev: 3.8746823487599074e-7",
            "extra": "mean: 2.3172498956403205 usec\nrounds: 57472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9385670999927445,
            "unit": "iter/sec",
            "range": "stddev: 0.034717215065811116",
            "extra": "mean: 1.0654539244000034 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 40.16245794563217,
            "unit": "iter/sec",
            "range": "stddev: 0.024189329175774262",
            "extra": "mean: 24.898874500004403 msec\nrounds: 14"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29585319+EdAbati@users.noreply.github.com",
            "name": "Edoardo Abati",
            "username": "EdAbati"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "9ba439220ea82ed82f84f3bd799943bd75f54518",
          "message": "refactor(udf): make coerce functions in ibis.udf.vectorized private\n\nVectorized UDF coercion functions were never intended to be public.\n\nBREAKING CHANGE: Vectorized UDF coercion functions are no longer a public API.",
          "timestamp": "2022-02-16T05:56:43-05:00",
          "tree_id": "e5532b2f73360aa993b7fc722446187c05da0eab",
          "url": "https://github.com/ibis-project/ibis/commit/9ba439220ea82ed82f84f3bd799943bd75f54518"
        },
        "date": 1645009168491,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 138.58220576764003,
            "unit": "iter/sec",
            "range": "stddev: 0.00031976129464259245",
            "extra": "mean: 7.215933636362334 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 271768.2571925422,
            "unit": "iter/sec",
            "range": "stddev: 0.0000362482394801535",
            "extra": "mean: 3.679605596070481 usec\nrounds: 25839"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 71.47036475431696,
            "unit": "iter/sec",
            "range": "stddev: 0.0008034015951522773",
            "extra": "mean: 13.991813298246782 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 661.2072870490707,
            "unit": "iter/sec",
            "range": "stddev: 0.0007356456326853315",
            "extra": "mean: 1.5123850259771654 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.815391959466202,
            "unit": "iter/sec",
            "range": "stddev: 0.004589864934084367",
            "extra": "mean: 550.8452292000015 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 157.49359082295797,
            "unit": "iter/sec",
            "range": "stddev: 0.0009182880484073517",
            "extra": "mean: 6.349464729165533 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8024470736495369,
            "unit": "iter/sec",
            "range": "stddev: 0.01653280459008868",
            "extra": "mean: 1.246188107400019 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 266.5471453814708,
            "unit": "iter/sec",
            "range": "stddev: 0.00012634529745860341",
            "extra": "mean: 3.7516815217392145 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8080384730026541,
            "unit": "iter/sec",
            "range": "stddev: 0.004978710155916798",
            "extra": "mean: 1.2375648355999942 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 247.41340212828104,
            "unit": "iter/sec",
            "range": "stddev: 0.00018923335382941436",
            "extra": "mean: 4.041818233765329 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.519061237610767,
            "unit": "iter/sec",
            "range": "stddev: 0.0051324417362441695",
            "extra": "mean: 396.97327920001726 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 96.23992314498493,
            "unit": "iter/sec",
            "range": "stddev: 0.0007134853691238178",
            "extra": "mean: 10.390698239580942 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 34.38185893015314,
            "unit": "iter/sec",
            "range": "stddev: 0.001167101588935202",
            "extra": "mean: 29.08510566666867 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 88.36183668814932,
            "unit": "iter/sec",
            "range": "stddev: 0.00047946797362945085",
            "extra": "mean: 11.317102919999797 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 20678.986810193128,
            "unit": "iter/sec",
            "range": "stddev: 0.000014175580086824623",
            "extra": "mean: 48.35826867044946 usec\nrounds: 5423"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 215.99402810625426,
            "unit": "iter/sec",
            "range": "stddev: 0.00012525012181105707",
            "extra": "mean: 4.629757631577057 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.62364128207528,
            "unit": "iter/sec",
            "range": "stddev: 0.0006839958419992799",
            "extra": "mean: 44.20154950000468 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9810.470217011127,
            "unit": "iter/sec",
            "range": "stddev: 0.000005314053759596398",
            "extra": "mean: 101.931913341526 usec\nrounds: 4812"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.16368454018422,
            "unit": "iter/sec",
            "range": "stddev: 0.0007751334790988317",
            "extra": "mean: 25.53385902631153 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 27.708628247076337,
            "unit": "iter/sec",
            "range": "stddev: 0.032546866036394104",
            "extra": "mean: 36.08984144155583 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 368912.8479037208,
            "unit": "iter/sec",
            "range": "stddev: 5.80913712861886e-7",
            "extra": "mean: 2.710667317992083 usec\nrounds: 59874"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 33.12812461916409,
            "unit": "iter/sec",
            "range": "stddev: 0.02370552943477286",
            "extra": "mean: 30.185831872339552 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 147.40590046155265,
            "unit": "iter/sec",
            "range": "stddev: 0.00016686428867853165",
            "extra": "mean: 6.783988950705718 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6169.407979665644,
            "unit": "iter/sec",
            "range": "stddev: 0.00005487287761378985",
            "extra": "mean: 162.0901070728339 usec\nrounds: 2559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.398689314009985,
            "unit": "iter/sec",
            "range": "stddev: 0.0008203478782690639",
            "extra": "mean: 17.123671982139804 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1322381869372616,
            "unit": "iter/sec",
            "range": "stddev: 0.03594213828093574",
            "extra": "mean: 7.562112149000006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 307178.6362692974,
            "unit": "iter/sec",
            "range": "stddev: 6.362074130697231e-7",
            "extra": "mean: 3.2554347273139137 usec\nrounds: 62890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.44422621971192,
            "unit": "iter/sec",
            "range": "stddev: 0.00022810876676032773",
            "extra": "mean: 14.610436193549958 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 59.067969749068666,
            "unit": "iter/sec",
            "range": "stddev: 0.0008306051920745999",
            "extra": "mean: 16.929649084743886 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.1231502971691694,
            "unit": "iter/sec",
            "range": "stddev: 0.010883985814129901",
            "extra": "mean: 890.3527893999922 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.51414642115865,
            "unit": "iter/sec",
            "range": "stddev: 0.001078160608947995",
            "extra": "mean: 27.386645944447864 msec\nrounds: 36"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "3a071527815d5656b30820c27b97c219243b5217",
          "message": "chore(conda-lock): relock",
          "timestamp": "2022-02-16T06:59:45-05:00",
          "tree_id": "c1402d038c6bd8d602cba983ff87eb1a10fe60a3",
          "url": "https://github.com/ibis-project/ibis/commit/3a071527815d5656b30820c27b97c219243b5217"
        },
        "date": 1645013290081,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.52791959329078,
            "unit": "iter/sec",
            "range": "stddev: 0.00047353443097680373",
            "extra": "mean: 35.05337978571634 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 45.10065822742936,
            "unit": "iter/sec",
            "range": "stddev: 0.014208283176748944",
            "extra": "mean: 22.172625396225794 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 94.29458284389655,
            "unit": "iter/sec",
            "range": "stddev: 0.00009061768566246682",
            "extra": "mean: 10.605063088889072 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 26204.773961658695,
            "unit": "iter/sec",
            "range": "stddev: 0.00001116422448677856",
            "extra": "mean: 38.16098553122961 usec\nrounds: 7257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 434310.45948076196,
            "unit": "iter/sec",
            "range": "stddev: 1.6865319812507423e-7",
            "extra": "mean: 2.302500384622433 usec\nrounds: 63695"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 364881.15109414374,
            "unit": "iter/sec",
            "range": "stddev: 2.24139470536413e-7",
            "extra": "mean: 2.7406184095872574 usec\nrounds: 69931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 43.580938288948744,
            "unit": "iter/sec",
            "range": "stddev: 0.0013041644540702343",
            "extra": "mean: 22.945811615386447 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 76.58813493700873,
            "unit": "iter/sec",
            "range": "stddev: 0.0008258477261883689",
            "extra": "mean: 13.056852746479173 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 334.9199762359441,
            "unit": "iter/sec",
            "range": "stddev: 0.00008989936897176135",
            "extra": "mean: 2.985787862637136 msec\nrounds: 182"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 3.2595388768943647,
            "unit": "iter/sec",
            "range": "stddev: 0.0013982923617652273",
            "extra": "mean: 306.7918616000014 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6948.4844925944535,
            "unit": "iter/sec",
            "range": "stddev: 0.0008721751174162396",
            "extra": "mean: 143.91627427042238 usec\nrounds: 3358"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 274.8613045415529,
            "unit": "iter/sec",
            "range": "stddev: 0.00006971603796471112",
            "extra": "mean: 3.638198551330903 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 11991.923709729645,
            "unit": "iter/sec",
            "range": "stddev: 0.000011363492712005752",
            "extra": "mean: 83.38945645465124 usec\nrounds: 6143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16487887385862998,
            "unit": "iter/sec",
            "range": "stddev: 0.018659301775580527",
            "extra": "mean: 6.065058406799997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 118.8722799076988,
            "unit": "iter/sec",
            "range": "stddev: 0.0005573445871968213",
            "extra": "mean: 8.412390178572108 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 74.98589968688935,
            "unit": "iter/sec",
            "range": "stddev: 0.0003683300443427135",
            "extra": "mean: 13.335840527026996 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8959153962980418,
            "unit": "iter/sec",
            "range": "stddev: 0.011108664964523236",
            "extra": "mean: 1.1161768221999977 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.4582722158687706,
            "unit": "iter/sec",
            "range": "stddev: 0.008435108958910637",
            "extra": "mean: 685.7430246000035 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.3685587113939928,
            "unit": "iter/sec",
            "range": "stddev: 0.002051233042677455",
            "extra": "mean: 422.197682999996 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 372293.28672666027,
            "unit": "iter/sec",
            "range": "stddev: 2.052921562973948e-7",
            "extra": "mean: 2.686054343854461 usec\nrounds: 30031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9002632932353971,
            "unit": "iter/sec",
            "range": "stddev: 0.0059479826916739005",
            "extra": "mean: 1.1107861527999945 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.9222803670382,
            "unit": "iter/sec",
            "range": "stddev: 0.0007030307430244443",
            "extra": "mean: 22.260668688888547 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 102.49555372060723,
            "unit": "iter/sec",
            "range": "stddev: 0.00030921457171746746",
            "extra": "mean: 9.756520782607813 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 83.64004958965111,
            "unit": "iter/sec",
            "range": "stddev: 0.00010942052173738709",
            "extra": "mean: 11.955994824323145 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 165.5253127360056,
            "unit": "iter/sec",
            "range": "stddev: 0.00009807870641577469",
            "extra": "mean: 6.041372062500727 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 167.09519530354095,
            "unit": "iter/sec",
            "range": "stddev: 0.00006090988780364989",
            "extra": "mean: 5.9846125328943485 msec\nrounds: 152"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 31.89638027078371,
            "unit": "iter/sec",
            "range": "stddev: 0.027322143494176866",
            "extra": "mean: 31.351519874998957 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.753617387944914,
            "unit": "iter/sec",
            "range": "stddev: 0.0008126065029128995",
            "extra": "mean: 23.389833681815343 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 258.0928245919492,
            "unit": "iter/sec",
            "range": "stddev: 0.0036894163432657505",
            "extra": "mean: 3.8745749773594964 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 180.1277188173049,
            "unit": "iter/sec",
            "range": "stddev: 0.00011226397016186178",
            "extra": "mean: 5.551616411765327 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 837.2816640644025,
            "unit": "iter/sec",
            "range": "stddev: 0.000015080390487108244",
            "extra": "mean: 1.19434121505267 msec\nrounds: 93"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "3d4de53539ebee4a5cf361edd20cbee27acd975b",
          "message": "test: bring back backend testing markers",
          "timestamp": "2022-02-16T14:43:35+01:00",
          "tree_id": "e474b81125da1f763929c211e1e5a7effb5b04a9",
          "url": "https://github.com/ibis-project/ibis/commit/3d4de53539ebee4a5cf361edd20cbee27acd975b"
        },
        "date": 1645019587263,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 39.26325595197649,
            "unit": "iter/sec",
            "range": "stddev: 0.020186289957938263",
            "extra": "mean: 25.469105293333694 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1488885388684772,
            "unit": "iter/sec",
            "range": "stddev: 0.0415942797410095",
            "extra": "mean: 6.716433699999999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 83.73715385469282,
            "unit": "iter/sec",
            "range": "stddev: 0.0001712325167738212",
            "extra": "mean: 11.942130272725501 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 84.83504700560731,
            "unit": "iter/sec",
            "range": "stddev: 0.00011462867992276459",
            "extra": "mean: 11.787581138888312 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 157.7015148645268,
            "unit": "iter/sec",
            "range": "stddev: 0.005658046510536631",
            "extra": "mean: 6.341093177570603 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.241640164893624,
            "unit": "iter/sec",
            "range": "stddev: 0.0010590294421051903",
            "extra": "mean: 24.24733827272069 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 284.80511914285063,
            "unit": "iter/sec",
            "range": "stddev: 0.0002209067709870498",
            "extra": "mean: 3.511172843415173 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.033695436588495,
            "unit": "iter/sec",
            "range": "stddev: 0.004858397807252412",
            "extra": "mean: 491.7157121999992 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 22896.26702248961,
            "unit": "iter/sec",
            "range": "stddev: 0.000014538931160647612",
            "extra": "mean: 43.67524186443846 usec\nrounds: 5900"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 261.06676227585353,
            "unit": "iter/sec",
            "range": "stddev: 0.003539905087951143",
            "extra": "mean: 3.830437820894872 msec\nrounds: 268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 99.34528177023155,
            "unit": "iter/sec",
            "range": "stddev: 0.006539143737717907",
            "extra": "mean: 10.065903303921639 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.807358699605051,
            "unit": "iter/sec",
            "range": "stddev: 0.0013821546539402013",
            "extra": "mean: 356.2067077999984 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 72.28951273471552,
            "unit": "iter/sec",
            "range": "stddev: 0.0005166996018658119",
            "extra": "mean: 13.833265188406381 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 36.96065826974081,
            "unit": "iter/sec",
            "range": "stddev: 0.022108030567065326",
            "extra": "mean: 27.05579518367741 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 165.0250701548787,
            "unit": "iter/sec",
            "range": "stddev: 0.00006762583480453721",
            "extra": "mean: 6.059685349998542 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.34727948138244,
            "unit": "iter/sec",
            "range": "stddev: 0.0013386558344362426",
            "extra": "mean: 22.052039536584665 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 166.4530637660781,
            "unit": "iter/sec",
            "range": "stddev: 0.00007310004744419782",
            "extra": "mean: 6.007699572327082 msec\nrounds: 159"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.250573634061573,
            "unit": "iter/sec",
            "range": "stddev: 0.002668625985216537",
            "extra": "mean: 799.6330426000043 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6939.241023253327,
            "unit": "iter/sec",
            "range": "stddev: 0.000045239664787511076",
            "extra": "mean: 144.1079790497275 usec\nrounds: 2673"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 72.75630201247426,
            "unit": "iter/sec",
            "range": "stddev: 0.0005522869180373752",
            "extra": "mean: 13.744513840581773 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 326484.74214321567,
            "unit": "iter/sec",
            "range": "stddev: 3.7796015199588104e-7",
            "extra": "mean: 3.062930271826732 usec\nrounds: 58140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.34431503376582,
            "unit": "iter/sec",
            "range": "stddev: 0.00027643208022324744",
            "extra": "mean: 21.57761959091237 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 240.00307966921773,
            "unit": "iter/sec",
            "range": "stddev: 0.00015473451068310514",
            "extra": "mean: 4.166613200873263 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 819.4639462135971,
            "unit": "iter/sec",
            "range": "stddev: 0.000015677681122270726",
            "extra": "mean: 1.2203099411762837 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 102.40545999733118,
            "unit": "iter/sec",
            "range": "stddev: 0.0005897548192445383",
            "extra": "mean: 9.76510432184047 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9031626274405894,
            "unit": "iter/sec",
            "range": "stddev: 0.0015750017497164347",
            "extra": "mean: 1.1072203051999963 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10487.976227569452,
            "unit": "iter/sec",
            "range": "stddev: 0.000012572280453695287",
            "extra": "mean: 95.34727942759136 usec\nrounds: 5522"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8976839690401748,
            "unit": "iter/sec",
            "range": "stddev: 0.006457064087448717",
            "extra": "mean: 1.113977785600008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 382234.28609574575,
            "unit": "iter/sec",
            "range": "stddev: 2.0282782638475934e-7",
            "extra": "mean: 2.6161964961707027 usec\nrounds: 64103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.8351315511579,
            "unit": "iter/sec",
            "range": "stddev: 0.000947872979311034",
            "extra": "mean: 38.70698308695785 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 316295.81674455554,
            "unit": "iter/sec",
            "range": "stddev: 4.969739375617071e-7",
            "extra": "mean: 3.1615972993016612 usec\nrounds: 27549"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "765e63a64e0d621ae78449a589d1e049e6fc81b4",
          "message": "docs: give the landing page a facelift",
          "timestamp": "2022-02-16T11:26:01-05:00",
          "tree_id": "eb407f74aca30413af3658c689a9690d6ae196a7",
          "url": "https://github.com/ibis-project/ibis/commit/765e63a64e0d621ae78449a589d1e049e6fc81b4"
        },
        "date": 1645029499097,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 164.1991518705253,
            "unit": "iter/sec",
            "range": "stddev: 0.00007808256994795574",
            "extra": "mean: 6.0901654400049665 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.113706332475362,
            "unit": "iter/sec",
            "range": "stddev: 0.0032528029295870457",
            "extra": "mean: 473.1026181999937 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 99.2653778700456,
            "unit": "iter/sec",
            "range": "stddev: 0.005959259400835836",
            "extra": "mean: 10.074005876541984 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.2837768338150357,
            "unit": "iter/sec",
            "range": "stddev: 0.003603107085616304",
            "extra": "mean: 778.9515853999887 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14851203241798577,
            "unit": "iter/sec",
            "range": "stddev: 0.049308308528211504",
            "extra": "mean: 6.733461146000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 243.16963897516837,
            "unit": "iter/sec",
            "range": "stddev: 0.00007805856703495402",
            "extra": "mean: 4.112355490654474 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.967580265799906,
            "unit": "iter/sec",
            "range": "stddev: 0.0013591511045587606",
            "extra": "mean: 40.05193892857051 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 380268.17916551774,
            "unit": "iter/sec",
            "range": "stddev: 2.0195323696873042e-7",
            "extra": "mean: 2.6297230606948423 usec\nrounds: 62501"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 72.17565918501883,
            "unit": "iter/sec",
            "range": "stddev: 0.0004405176362513432",
            "extra": "mean: 13.855086483332949 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23190.331745436677,
            "unit": "iter/sec",
            "range": "stddev: 0.000014288970781619918",
            "extra": "mean: 43.1214184849588 usec\nrounds: 5821"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 29.406445874389398,
            "unit": "iter/sec",
            "range": "stddev: 0.03212499028155067",
            "extra": "mean: 34.00614968131589 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10386.983709040938,
            "unit": "iter/sec",
            "range": "stddev: 0.000004579882052528997",
            "extra": "mean: 96.27433988652447 usec\nrounds: 356"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 83.40497580494291,
            "unit": "iter/sec",
            "range": "stddev: 0.00019385129297457804",
            "extra": "mean: 11.989692345678206 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 83.40177218894776,
            "unit": "iter/sec",
            "range": "stddev: 0.00013402958596684723",
            "extra": "mean: 11.990152891889243 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 331612.4902387628,
            "unit": "iter/sec",
            "range": "stddev: 2.182526803948853e-7",
            "extra": "mean: 3.0155679578896275 usec\nrounds: 62112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 165.88612840749536,
            "unit": "iter/sec",
            "range": "stddev: 0.00006583675445117715",
            "extra": "mean: 6.028231592357883 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.807933460620901,
            "unit": "iter/sec",
            "range": "stddev: 0.001174733652348276",
            "extra": "mean: 356.1337952000031 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 37.62502332172359,
            "unit": "iter/sec",
            "range": "stddev: 0.0013516531694772519",
            "extra": "mean: 26.578056615386313 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.38765905304205,
            "unit": "iter/sec",
            "range": "stddev: 0.012373827816200948",
            "extra": "mean: 24.16179177272165 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6521.587648412774,
            "unit": "iter/sec",
            "range": "stddev: 0.00004761190597296792",
            "extra": "mean: 153.3368949267101 usec\nrounds: 2484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9163277316388929,
            "unit": "iter/sec",
            "range": "stddev: 0.0032080191016897047",
            "extra": "mean: 1.091312600799995 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 801.5681288247878,
            "unit": "iter/sec",
            "range": "stddev: 0.000016916987202986972",
            "extra": "mean: 1.2475545921045306 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 299.08013102613677,
            "unit": "iter/sec",
            "range": "stddev: 0.00002108305172643441",
            "extra": "mean: 3.34358553531799 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 278.42232687057685,
            "unit": "iter/sec",
            "range": "stddev: 0.0001204902128716953",
            "extra": "mean: 3.5916659818192125 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 99.90924164105591,
            "unit": "iter/sec",
            "range": "stddev: 0.00025813661368249497",
            "extra": "mean: 10.009084080456756 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 325740.66049766407,
            "unit": "iter/sec",
            "range": "stddev: 2.556631724923239e-7",
            "extra": "mean: 3.0699268506185495 usec\nrounds: 26316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.48815201512606,
            "unit": "iter/sec",
            "range": "stddev: 0.0011338417307946121",
            "extra": "mean: 15.26993767924656 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 179.19299704213094,
            "unit": "iter/sec",
            "range": "stddev: 0.0001404180930347809",
            "extra": "mean: 5.5805752261896995 msec\nrounds: 168"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9145513498329226,
            "unit": "iter/sec",
            "range": "stddev: 0.0047671043290374105",
            "extra": "mean: 1.0934323153999912 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 37.88246902684012,
            "unit": "iter/sec",
            "range": "stddev: 0.02468355998855239",
            "extra": "mean: 26.39743463636147 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.417570753747555,
            "unit": "iter/sec",
            "range": "stddev: 0.0016698757959153117",
            "extra": "mean: 24.741714589743843 msec\nrounds: 39"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "b3b450bbb5d5dc199259d90591e89625636f770e",
          "message": "refactor(datamgr.py): remove geo hacks, integrate impala, perf boost",
          "timestamp": "2022-02-16T21:56:56+01:00",
          "tree_id": "156193eb9151768fa286ecf3c58738d866426494",
          "url": "https://github.com/ibis-project/ibis/commit/b3b450bbb5d5dc199259d90591e89625636f770e"
        },
        "date": 1645045353313,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9100.183290301335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065449395944717195",
            "extra": "mean: 109.88789655102507 usec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 259.7773685152147,
            "unit": "iter/sec",
            "range": "stddev: 0.00005126024345661462",
            "extra": "mean: 3.849450033756239 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.932810643894,
            "unit": "iter/sec",
            "range": "stddev: 0.0010504049310315672",
            "extra": "mean: 27.829718357139654 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6056.046953760241,
            "unit": "iter/sec",
            "range": "stddev: 0.000054854861732515335",
            "extra": "mean: 165.1242151250319 usec\nrounds: 1957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 211.45410517629662,
            "unit": "iter/sec",
            "range": "stddev: 0.00010507955325099524",
            "extra": "mean: 4.7291586000010035 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 58.252175286221714,
            "unit": "iter/sec",
            "range": "stddev: 0.0005043861835529904",
            "extra": "mean: 17.166740900000832 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 33.3153442841294,
            "unit": "iter/sec",
            "range": "stddev: 0.023343250828073016",
            "extra": "mean: 30.016198886360456 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.14990891733675,
            "unit": "iter/sec",
            "range": "stddev: 0.0008401090023174514",
            "extra": "mean: 26.917966400001855 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 307163.24918487354,
            "unit": "iter/sec",
            "range": "stddev: 5.075799797479471e-7",
            "extra": "mean: 3.2555978055764285 usec\nrounds: 23148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.5293658476635,
            "unit": "iter/sec",
            "range": "stddev: 0.0006552770387790428",
            "extra": "mean: 10.807379806821094 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.095724231920904,
            "unit": "iter/sec",
            "range": "stddev: 0.0050217024856206854",
            "extra": "mean: 912.6383909999959 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 134.3727234512999,
            "unit": "iter/sec",
            "range": "stddev: 0.0001259640305911571",
            "extra": "mean: 7.441986545449646 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 34.07544641182739,
            "unit": "iter/sec",
            "range": "stddev: 0.0011909948046319619",
            "extra": "mean: 29.346644147056743 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 86.31968502717146,
            "unit": "iter/sec",
            "range": "stddev: 0.0003554496562298251",
            "extra": "mean: 11.584843013331465 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.68962136083259,
            "unit": "iter/sec",
            "range": "stddev: 0.0012670631798677885",
            "extra": "mean: 17.334140464283468 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 68.42539093907158,
            "unit": "iter/sec",
            "range": "stddev: 0.00012637966309876644",
            "extra": "mean: 14.614457970586326 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 154.1902614387194,
            "unit": "iter/sec",
            "range": "stddev: 0.0004921218418955597",
            "extra": "mean: 6.485493899998573 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 340370.30871189415,
            "unit": "iter/sec",
            "range": "stddev: 3.8334871394861024e-7",
            "extra": "mean: 2.937976593153571 usec\nrounds: 56180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 225.27512776427452,
            "unit": "iter/sec",
            "range": "stddev: 0.004731630259247956",
            "extra": "mean: 4.439016459226645 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.40765262880416,
            "unit": "iter/sec",
            "range": "stddev: 0.0001505651468892681",
            "extra": "mean: 7.022094540147869 msec\nrounds: 137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7701972586072263,
            "unit": "iter/sec",
            "range": "stddev: 0.010573254010485108",
            "extra": "mean: 1.2983686826000054 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 71.81929271155198,
            "unit": "iter/sec",
            "range": "stddev: 0.00015894613567279391",
            "extra": "mean: 13.923835257140484 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.419412363360457,
            "unit": "iter/sec",
            "range": "stddev: 0.00033511657074906183",
            "extra": "mean: 413.32350579999684 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 693.7150319930663,
            "unit": "iter/sec",
            "range": "stddev: 0.000026013288511234726",
            "extra": "mean: 1.441514100000063 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 26.688585426242526,
            "unit": "iter/sec",
            "range": "stddev: 0.032918140517786625",
            "extra": "mean: 37.4692020588215 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 21.78446949106596,
            "unit": "iter/sec",
            "range": "stddev: 0.0007605559640690089",
            "extra": "mean: 45.90426222727666 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.8103057761381804,
            "unit": "iter/sec",
            "range": "stddev: 0.0036084207583547668",
            "extra": "mean: 552.3928682000019 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.12823042741744162,
            "unit": "iter/sec",
            "range": "stddev: 0.05571866118242325",
            "extra": "mean: 7.798461099600002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 303847.9782409558,
            "unit": "iter/sec",
            "range": "stddev: 7.255340646415359e-7",
            "extra": "mean: 3.2911194795148044 usec\nrounds: 64103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 20362.193376984404,
            "unit": "iter/sec",
            "range": "stddev: 0.00003458680375851954",
            "extra": "mean: 49.11062288261687 usec\nrounds: 3129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7728322763104879,
            "unit": "iter/sec",
            "range": "stddev: 0.004842114907893325",
            "extra": "mean: 1.2939418171999932 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "9a98503d126f860d8c648ecf25d1b03ed643199e",
          "message": "chore(deps/nixpkgs): update",
          "timestamp": "2022-02-17T01:01:53Z",
          "tree_id": "0a3ec537b295365fcb44532fb7a75cfb2fb51c54",
          "url": "https://github.com/ibis-project/ibis/commit/9a98503d126f860d8c648ecf25d1b03ed643199e"
        },
        "date": 1645059891884,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 202.85555617105427,
            "unit": "iter/sec",
            "range": "stddev: 0.003463621163313011",
            "extra": "mean: 4.929616022726871 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.35607549825545,
            "unit": "iter/sec",
            "range": "stddev: 0.0005670000076835664",
            "extra": "mean: 44.730569999999986 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 34.94697642045275,
            "unit": "iter/sec",
            "range": "stddev: 0.0005960829880931979",
            "extra": "mean: 28.614778799997964 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7875640763097264,
            "unit": "iter/sec",
            "range": "stddev: 0.009923354571051514",
            "extra": "mean: 1.269737955399998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 9072.633104080918,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061802391072258065",
            "extra": "mean: 110.22158490573091 usec\nrounds: 318"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 244.51682855744943,
            "unit": "iter/sec",
            "range": "stddev: 0.00019988478898353307",
            "extra": "mean: 4.089698062499814 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 69.08921650854349,
            "unit": "iter/sec",
            "range": "stddev: 0.0002536676603476495",
            "extra": "mean: 14.474038794119792 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 72.75155782990394,
            "unit": "iter/sec",
            "range": "stddev: 0.0002931343444593213",
            "extra": "mean: 13.74541013043377 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 31.468515961211835,
            "unit": "iter/sec",
            "range": "stddev: 0.026175910300301294",
            "extra": "mean: 31.77779343749805 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 141.99743298310463,
            "unit": "iter/sec",
            "range": "stddev: 0.00010492983229440879",
            "extra": "mean: 7.042380830356164 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5413.985634253321,
            "unit": "iter/sec",
            "range": "stddev: 0.0011873703210998482",
            "extra": "mean: 184.70680706523828 usec\nrounds: 2576"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 701.0502003071061,
            "unit": "iter/sec",
            "range": "stddev: 0.000049703464054927035",
            "extra": "mean: 1.4264313733337985 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 340156.08667615114,
            "unit": "iter/sec",
            "range": "stddev: 6.410655289395533e-7",
            "extra": "mean: 2.939826859403106 usec\nrounds: 56174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.7729529143576749,
            "unit": "iter/sec",
            "range": "stddev: 0.013577704060498495",
            "extra": "mean: 1.2937398662000021 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.41345584311809,
            "unit": "iter/sec",
            "range": "stddev: 0.0002966304644508696",
            "extra": "mean: 12.75291325000012 msec\nrounds: 20"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 49.65341262561451,
            "unit": "iter/sec",
            "range": "stddev: 0.0007434016218228513",
            "extra": "mean: 20.139602640003318 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.808641132294282,
            "unit": "iter/sec",
            "range": "stddev: 0.0033396744209610563",
            "extra": "mean: 552.901281600009 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 257.99661035814887,
            "unit": "iter/sec",
            "range": "stddev: 0.00015022139478274818",
            "extra": "mean: 3.876019915966368 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.9367818329544,
            "unit": "iter/sec",
            "range": "stddev: 0.0009417374243321344",
            "extra": "mean: 27.07328441666827 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 298269.3251671244,
            "unit": "iter/sec",
            "range": "stddev: 6.893423151019765e-7",
            "extra": "mean: 3.352674632028239 usec\nrounds: 23979"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.5021183872561363,
            "unit": "iter/sec",
            "range": "stddev: 0.002159414897327309",
            "extra": "mean: 399.6613449999927 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.91334120967973,
            "unit": "iter/sec",
            "range": "stddev: 0.0008134903402926228",
            "extra": "mean: 26.375939658536034 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.1228151579143584,
            "unit": "iter/sec",
            "range": "stddev: 0.004910477079312101",
            "extra": "mean: 890.6185429999994 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 144.44359739091396,
            "unit": "iter/sec",
            "range": "stddev: 0.0002758613321678605",
            "extra": "mean: 6.923117521738653 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 62.38491592146845,
            "unit": "iter/sec",
            "range": "stddev: 0.0005382760672005222",
            "extra": "mean: 16.029515873016848 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.12987344670977197,
            "unit": "iter/sec",
            "range": "stddev: 0.03386632587059696",
            "extra": "mean: 7.699803349600006 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 298909.70581776265,
            "unit": "iter/sec",
            "range": "stddev: 4.600017229473493e-7",
            "extra": "mean: 3.3454919011886273 usec\nrounds: 62108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 33.210831448534464,
            "unit": "iter/sec",
            "range": "stddev: 0.023108733473901816",
            "extra": "mean: 30.110658372093493 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19942.30484119578,
            "unit": "iter/sec",
            "range": "stddev: 0.00001555126419725714",
            "extra": "mean: 50.14465519222492 usec\nrounds: 5200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 156.22306537544895,
            "unit": "iter/sec",
            "range": "stddev: 0.0002264206188715014",
            "extra": "mean: 6.401103432433056 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.83707650919838,
            "unit": "iter/sec",
            "range": "stddev: 0.0006609239830491206",
            "extra": "mean: 10.77155849366841 msec\nrounds: 79"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "dd4a3f1027f5aaf7a6bca261f4668de1d0a6a32d",
          "message": "chore(deps/poetry2nix): update",
          "timestamp": "2022-02-18T01:12:41Z",
          "tree_id": "2150d27d3233e1afa4a4bb20ae5b967c97a7509b",
          "url": "https://github.com/ibis-project/ibis/commit/dd4a3f1027f5aaf7a6bca261f4668de1d0a6a32d"
        },
        "date": 1645147565189,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 331138.2236866398,
            "unit": "iter/sec",
            "range": "stddev: 2.3208062974567913e-7",
            "extra": "mean: 3.0198869489204974 usec\nrounds: 25316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 84.06320900886116,
            "unit": "iter/sec",
            "range": "stddev: 0.00010475348422601927",
            "extra": "mean: 11.895810447761866 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.7780005456415133,
            "unit": "iter/sec",
            "range": "stddev: 0.0015182181606512193",
            "extra": "mean: 359.97113160000254 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 238.00577213769876,
            "unit": "iter/sec",
            "range": "stddev: 0.00015367904615615156",
            "extra": "mean: 4.201578772725931 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 328250.3262135819,
            "unit": "iter/sec",
            "range": "stddev: 3.392900225466234e-7",
            "extra": "mean: 3.046455464447375 usec\nrounds: 28090"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.084908955087446,
            "unit": "iter/sec",
            "range": "stddev: 0.0011440461321264915",
            "extra": "mean: 39.8646055200129 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 798.1949359831232,
            "unit": "iter/sec",
            "range": "stddev: 0.000021930977501826626",
            "extra": "mean: 1.252826790699088 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 375735.9607446578,
            "unit": "iter/sec",
            "range": "stddev: 1.979664983775846e-7",
            "extra": "mean: 2.66144341898533 usec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 259.6259431434799,
            "unit": "iter/sec",
            "range": "stddev: 0.0036864901083827426",
            "extra": "mean: 3.8516952038470174 msec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 39.45389850516613,
            "unit": "iter/sec",
            "range": "stddev: 0.000894384594906664",
            "extra": "mean: 25.346037727274506 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 37.14859343406916,
            "unit": "iter/sec",
            "range": "stddev: 0.021019224177844614",
            "extra": "mean: 26.9189196025628 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 45.62870515765079,
            "unit": "iter/sec",
            "range": "stddev: 0.0006125216552439816",
            "extra": "mean: 21.916028441853012 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 103.79549056860397,
            "unit": "iter/sec",
            "range": "stddev: 0.0002505836714478261",
            "extra": "mean: 9.634329916664797 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 272.6404559478314,
            "unit": "iter/sec",
            "range": "stddev: 0.0038716972437533425",
            "extra": "mean: 3.6678342417067618 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 84.9996012481944,
            "unit": "iter/sec",
            "range": "stddev: 0.00005949213337634105",
            "extra": "mean: 11.764761073173181 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.2592758181206178,
            "unit": "iter/sec",
            "range": "stddev: 0.0033545234312437116",
            "extra": "mean: 794.1072048000024 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0780551796773437,
            "unit": "iter/sec",
            "range": "stddev: 0.0031213336288551607",
            "extra": "mean: 481.2191753999855 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 156.46075540115663,
            "unit": "iter/sec",
            "range": "stddev: 0.00724505680744985",
            "extra": "mean: 6.391379086954143 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 7098.376975854953,
            "unit": "iter/sec",
            "range": "stddev: 0.0000480570438762958",
            "extra": "mean: 140.87727425600082 usec\nrounds: 2793"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 105.44984460200993,
            "unit": "iter/sec",
            "range": "stddev: 0.0006462117401632989",
            "extra": "mean: 9.483181352938091 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8938416999127158,
            "unit": "iter/sec",
            "range": "stddev: 0.00875982390221765",
            "extra": "mean: 1.118766332000007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 22948.73089376802,
            "unit": "iter/sec",
            "range": "stddev: 0.000020828473516786197",
            "extra": "mean: 43.57539441414431 usec\nrounds: 5550"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.64419323834584,
            "unit": "iter/sec",
            "range": "stddev: 0.0010297958418736962",
            "extra": "mean: 14.567874612901454 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8980986276717006,
            "unit": "iter/sec",
            "range": "stddev: 0.004534044497080457",
            "extra": "mean: 1.1134634540000092 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 36.07392072133632,
            "unit": "iter/sec",
            "range": "stddev: 0.025533270133243503",
            "extra": "mean: 27.720857062496645 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 158.1521450651275,
            "unit": "iter/sec",
            "range": "stddev: 0.00015698741586578187",
            "extra": "mean: 6.323025208340975 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10711.768742845043,
            "unit": "iter/sec",
            "range": "stddev: 0.00000215011939280404",
            "extra": "mean: 93.3552641031345 usec\nrounds: 5123"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.56082930090736,
            "unit": "iter/sec",
            "range": "stddev: 0.00007454804968563234",
            "extra": "mean: 6.113933294873875 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 69.45923318910907,
            "unit": "iter/sec",
            "range": "stddev: 0.00026920825360899774",
            "extra": "mean: 14.396934058822808 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 39.99324089617439,
            "unit": "iter/sec",
            "range": "stddev: 0.0012429959401417726",
            "extra": "mean: 25.004225153847344 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14816307804325546,
            "unit": "iter/sec",
            "range": "stddev: 0.05412376045847269",
            "extra": "mean: 6.749319825200007 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "c6f0924ec16ce5c41c1b91d7e4754a1e39ce3ab2",
          "message": "docs: cleanup backend_test_suite docs",
          "timestamp": "2022-02-18T11:40:26+01:00",
          "tree_id": "1b119c11f893d86556f6a51a77b1082251910826",
          "url": "https://github.com/ibis-project/ibis/commit/c6f0924ec16ce5c41c1b91d7e4754a1e39ce3ab2"
        },
        "date": 1645180970152,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 45.16811104732689,
            "unit": "iter/sec",
            "range": "stddev: 0.015455117967729247",
            "extra": "mean: 22.1395134047604 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 231.46947810855204,
            "unit": "iter/sec",
            "range": "stddev: 0.0027789250006948186",
            "extra": "mean: 4.320224023363594 msec\nrounds: 214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9113989490461836,
            "unit": "iter/sec",
            "range": "stddev: 0.006953460302318432",
            "extra": "mean: 1.0972143440000024 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 85.78435566597786,
            "unit": "iter/sec",
            "range": "stddev: 0.00004565134245030221",
            "extra": "mean: 11.657137157895573 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 823.3804314989152,
            "unit": "iter/sec",
            "range": "stddev: 0.000014593155819559555",
            "extra": "mean: 1.2145054239139002 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.8181513165103045,
            "unit": "iter/sec",
            "range": "stddev: 0.0024085522335524465",
            "extra": "mean: 354.84255019999864 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 41.08055926744593,
            "unit": "iter/sec",
            "range": "stddev: 0.014741165393868263",
            "extra": "mean: 24.342414461539345 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9122030538397744,
            "unit": "iter/sec",
            "range": "stddev: 0.004569212625230858",
            "extra": "mean: 1.0962471522000043 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.2836924357616928,
            "unit": "iter/sec",
            "range": "stddev: 0.0026185800186212826",
            "extra": "mean: 779.0027985999927 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 7140.968396973581,
            "unit": "iter/sec",
            "range": "stddev: 0.00004412089796983617",
            "extra": "mean: 140.03702921074554 usec\nrounds: 3218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10355.374375264026,
            "unit": "iter/sec",
            "range": "stddev: 0.000003965627198106044",
            "extra": "mean: 96.56821315786601 usec\nrounds: 380"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 83.1628547856562,
            "unit": "iter/sec",
            "range": "stddev: 0.00010688985594025844",
            "extra": "mean: 12.024599234566905 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 163.068801394537,
            "unit": "iter/sec",
            "range": "stddev: 0.00022736444099922414",
            "extra": "mean: 6.1323808812487 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 78.85721162814679,
            "unit": "iter/sec",
            "range": "stddev: 0.00019758981208159194",
            "extra": "mean: 12.681148361110276 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 366499.47769114067,
            "unit": "iter/sec",
            "range": "stddev: 1.4806817773398386e-7",
            "extra": "mean: 2.7285168489182077 usec\nrounds: 71429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.7968574479503,
            "unit": "iter/sec",
            "range": "stddev: 0.0004221623556480442",
            "extra": "mean: 21.368956261908135 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23255.500238804572,
            "unit": "iter/sec",
            "range": "stddev: 0.000011245653191100055",
            "extra": "mean: 43.00058006627529 usec\nrounds: 7525"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 284.05281502144067,
            "unit": "iter/sec",
            "range": "stddev: 0.00019075660280368136",
            "extra": "mean: 3.520472064057942 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 312462.21116363356,
            "unit": "iter/sec",
            "range": "stddev: 2.0372530803999556e-7",
            "extra": "mean: 3.2003870044826295 usec\nrounds: 30395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.0783560568051302,
            "unit": "iter/sec",
            "range": "stddev: 0.0009973564472486437",
            "extra": "mean: 481.1495107999974 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 48.84349393499434,
            "unit": "iter/sec",
            "range": "stddev: 0.000911474620247137",
            "extra": "mean: 20.473555829787625 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 325363.27708050056,
            "unit": "iter/sec",
            "range": "stddev: 1.943878927508364e-7",
            "extra": "mean: 3.0734876073693544 usec\nrounds: 76336"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15042572579742072,
            "unit": "iter/sec",
            "range": "stddev: 0.03667149611581344",
            "extra": "mean: 6.647799069600012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 76.84962583385828,
            "unit": "iter/sec",
            "range": "stddev: 0.00016099920598630166",
            "extra": "mean: 13.012425098359055 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.676958408846065,
            "unit": "iter/sec",
            "range": "stddev: 0.0004978050616341955",
            "extra": "mean: 36.13113786666607 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 177.58308529766603,
            "unit": "iter/sec",
            "range": "stddev: 0.00008882001678376958",
            "extra": "mean: 5.631166945454252 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 168.11700141615336,
            "unit": "iter/sec",
            "range": "stddev: 0.00006345827649052994",
            "extra": "mean: 5.9482383790835085 msec\nrounds: 153"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 279.2671277367912,
            "unit": "iter/sec",
            "range": "stddev: 0.0001200831582527471",
            "extra": "mean: 3.5808009632358098 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 42.796894829727954,
            "unit": "iter/sec",
            "range": "stddev: 0.0010362213605860223",
            "extra": "mean: 23.366181214282193 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 109.46966596419432,
            "unit": "iter/sec",
            "range": "stddev: 0.00010208566495271966",
            "extra": "mean: 9.134950684211306 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 106.23028551034973,
            "unit": "iter/sec",
            "range": "stddev: 0.00048248624837121375",
            "extra": "mean: 9.413511365387158 msec\nrounds: 104"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "c17c5b5b9515c2579b435a138119ec2ebabdcd49",
          "message": "ci(impala): fix impala system deps install",
          "timestamp": "2022-02-18T06:33:30-05:00",
          "tree_id": "ab6fbc026366bc531044890f3497282af6c958d9",
          "url": "https://github.com/ibis-project/ibis/commit/c17c5b5b9515c2579b435a138119ec2ebabdcd49"
        },
        "date": 1645184165647,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 106.93088344258913,
            "unit": "iter/sec",
            "range": "stddev: 0.0004765287678486319",
            "extra": "mean: 9.351835202380022 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 319117.8273608535,
            "unit": "iter/sec",
            "range": "stddev: 2.1196112865054819e-7",
            "extra": "mean: 3.133638782483987 usec\nrounds: 29240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 38.29266232602171,
            "unit": "iter/sec",
            "range": "stddev: 0.018936033558946276",
            "extra": "mean: 26.114663730770467 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 166.95386262756872,
            "unit": "iter/sec",
            "range": "stddev: 0.00004905100282627645",
            "extra": "mean: 5.989678730768533 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10552.020831241924,
            "unit": "iter/sec",
            "range": "stddev: 0.000002555463137388241",
            "extra": "mean: 94.7685771278282 usec\nrounds: 376"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.74725384243849,
            "unit": "iter/sec",
            "range": "stddev: 0.009040857726446671",
            "extra": "mean: 22.858577674421166 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 35.71751760748716,
            "unit": "iter/sec",
            "range": "stddev: 0.023404388669630134",
            "extra": "mean: 27.997466425000894 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.2829666000976243,
            "unit": "iter/sec",
            "range": "stddev: 0.0025412634237586334",
            "extra": "mean: 779.4435178000015 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6955.743297703701,
            "unit": "iter/sec",
            "range": "stddev: 0.000043318695209238634",
            "extra": "mean: 143.76608756250826 usec\nrounds: 3015"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 166.21978800469185,
            "unit": "iter/sec",
            "range": "stddev: 0.00008108762167423075",
            "extra": "mean: 6.016130883115872 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 289.92993552163176,
            "unit": "iter/sec",
            "range": "stddev: 0.00016914253184782414",
            "extra": "mean: 3.449109172534513 msec\nrounds: 284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 239.7013053762145,
            "unit": "iter/sec",
            "range": "stddev: 0.00021426120710739012",
            "extra": "mean: 4.1718587991437355 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 106.45998430682145,
            "unit": "iter/sec",
            "range": "stddev: 0.0002257661145306844",
            "extra": "mean: 9.393200708333419 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 23469.568956662988,
            "unit": "iter/sec",
            "range": "stddev: 0.000014779856540928539",
            "extra": "mean: 42.608366683108635 usec\nrounds: 6117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.107313310256785,
            "unit": "iter/sec",
            "range": "stddev: 0.0013175165715494945",
            "extra": "mean: 21.228126372094916 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9138458260437431,
            "unit": "iter/sec",
            "range": "stddev: 0.007192565766218617",
            "extra": "mean: 1.0942764868000097 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 73.84638531750744,
            "unit": "iter/sec",
            "range": "stddev: 0.0008383242277397079",
            "extra": "mean: 13.54162422033839 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 279.67788455701543,
            "unit": "iter/sec",
            "range": "stddev: 0.00012795639395399698",
            "extra": "mean: 3.5755419188181783 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 826.9357069532048,
            "unit": "iter/sec",
            "range": "stddev: 0.000016185951558348598",
            "extra": "mean: 1.2092838555544303 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 83.58703089343821,
            "unit": "iter/sec",
            "range": "stddev: 0.00024726582282051353",
            "extra": "mean: 11.963578432099833 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.084148412515235,
            "unit": "iter/sec",
            "range": "stddev: 0.0026064287991658342",
            "extra": "mean: 479.8122792000015 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1493477669119818,
            "unit": "iter/sec",
            "range": "stddev: 0.02580429052339547",
            "extra": "mean: 6.695781401199997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 76.70691830241842,
            "unit": "iter/sec",
            "range": "stddev: 0.0006620055683954151",
            "extra": "mean: 13.036633750002599 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 85.55469740714477,
            "unit": "iter/sec",
            "range": "stddev: 0.00005236542034113874",
            "extra": "mean: 11.688428926831653 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 327747.62635006063,
            "unit": "iter/sec",
            "range": "stddev: 1.7392630469425392e-7",
            "extra": "mean: 3.051128122990341 usec\nrounds: 67568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 182.04482158532358,
            "unit": "iter/sec",
            "range": "stddev: 0.00009605619225754916",
            "extra": "mean: 5.4931526823535854 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.943759274758786,
            "unit": "iter/sec",
            "range": "stddev: 0.0015364762112188726",
            "extra": "mean: 339.7016898000061 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.489505598702323,
            "unit": "iter/sec",
            "range": "stddev: 0.0005397747121810868",
            "extra": "mean: 36.3775185555613 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 41.40631799307713,
            "unit": "iter/sec",
            "range": "stddev: 0.0011686468334709647",
            "extra": "mean: 24.150903738100872 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 380683.58617739286,
            "unit": "iter/sec",
            "range": "stddev: 2.0018475698680736e-7",
            "extra": "mean: 2.6268534717806693 usec\nrounds: 60241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9155193830787565,
            "unit": "iter/sec",
            "range": "stddev: 0.0037393767856312194",
            "extra": "mean: 1.092276164199984 sec\nrounds: 5"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "22617b6206bbf58767b4f2671f7d3f940cc28389",
          "message": "build: introduce a justfile for development convenience",
          "timestamp": "2022-02-18T14:48:38+01:00",
          "tree_id": "4049e27c15fe1b511402543a9cf86fd575081d18",
          "url": "https://github.com/ibis-project/ibis/commit/22617b6206bbf58767b4f2671f7d3f940cc28389"
        },
        "date": 1645192734629,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 69.65569384357832,
            "unit": "iter/sec",
            "range": "stddev: 0.0004433644997825964",
            "extra": "mean: 14.35632817391269 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 260.0813375754189,
            "unit": "iter/sec",
            "range": "stddev: 0.0022673469954637405",
            "extra": "mean: 3.844951003875924 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 39.634520966231904,
            "unit": "iter/sec",
            "range": "stddev: 0.0005807609430732933",
            "extra": "mean: 25.230530749999147 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 361833.27586828225,
            "unit": "iter/sec",
            "range": "stddev: 2.2948597848420026e-7",
            "extra": "mean: 2.7637038014271216 usec\nrounds: 63292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 97.7820464770841,
            "unit": "iter/sec",
            "range": "stddev: 0.00435006987228662",
            "extra": "mean: 10.226826253164552 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 309056.8019012043,
            "unit": "iter/sec",
            "range": "stddev: 2.41250618124026e-7",
            "extra": "mean: 3.2356511613669916 usec\nrounds: 83348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 84.67148986021881,
            "unit": "iter/sec",
            "range": "stddev: 0.00016459894211248127",
            "extra": "mean: 11.81035082352826 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.739320097440675,
            "unit": "iter/sec",
            "range": "stddev: 0.0006982268146042868",
            "extra": "mean: 38.85106507142869 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 35.57924871023874,
            "unit": "iter/sec",
            "range": "stddev: 0.02297597964436388",
            "extra": "mean: 28.106270824999946 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 67.91953436923741,
            "unit": "iter/sec",
            "range": "stddev: 0.00034803707182680475",
            "extra": "mean: 14.723304705883363 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 86.74504889778903,
            "unit": "iter/sec",
            "range": "stddev: 0.00006442428852128605",
            "extra": "mean: 11.528035463767985 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 239.58528799493624,
            "unit": "iter/sec",
            "range": "stddev: 0.00006721286666857785",
            "extra": "mean: 4.173878990521052 msec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 172.48280911667524,
            "unit": "iter/sec",
            "range": "stddev: 0.00012674597098748792",
            "extra": "mean: 5.797679230302624 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 104.68593788073083,
            "unit": "iter/sec",
            "range": "stddev: 0.0002088675186072947",
            "extra": "mean: 9.552381344085626 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 22661.00324337641,
            "unit": "iter/sec",
            "range": "stddev: 0.00001888644614593724",
            "extra": "mean: 44.1286729126739 usec\nrounds: 7258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16396378657966748,
            "unit": "iter/sec",
            "range": "stddev: 0.04329579594014851",
            "extra": "mean: 6.098907697000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10215.615358734696,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020911923972351845",
            "extra": "mean: 97.88935515714833 usec\nrounds: 5575"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.056720476822186,
            "unit": "iter/sec",
            "range": "stddev: 0.00018253043664463853",
            "extra": "mean: 21.250949702127045 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 293.1576271653115,
            "unit": "iter/sec",
            "range": "stddev: 0.00009170487860006685",
            "extra": "mean: 3.411134172661659 msec\nrounds: 278"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9150364974861307,
            "unit": "iter/sec",
            "range": "stddev: 0.003450552175307476",
            "extra": "mean: 1.092852583200002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.837144738254143,
            "unit": "iter/sec",
            "range": "stddev: 0.000442035886209046",
            "extra": "mean: 352.46703719999743 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6361.364247941929,
            "unit": "iter/sec",
            "range": "stddev: 0.0010808278981916865",
            "extra": "mean: 157.19898452969846 usec\nrounds: 3232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9166381936538847,
            "unit": "iter/sec",
            "range": "stddev: 0.0021335659393447656",
            "extra": "mean: 1.090942977200001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 1.2776074759520295,
            "unit": "iter/sec",
            "range": "stddev: 0.005028331055187183",
            "extra": "mean: 782.7130154000031 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 37.62649697168879,
            "unit": "iter/sec",
            "range": "stddev: 0.018118377838164314",
            "extra": "mean: 26.577015679998794 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1011030693623107,
            "unit": "iter/sec",
            "range": "stddev: 0.003240090245403596",
            "extra": "mean: 475.9404783999969 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 311429.29728405946,
            "unit": "iter/sec",
            "range": "stddev: 2.43932914396943e-7",
            "extra": "mean: 3.2110016903383523 usec\nrounds: 28987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.8285328390283,
            "unit": "iter/sec",
            "range": "stddev: 0.00008342247361868353",
            "extra": "mean: 6.5432807697845465 msec\nrounds: 139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.968975530239675,
            "unit": "iter/sec",
            "range": "stddev: 0.0006605645994662129",
            "extra": "mean: 21.753802177779058 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 148.19114170020916,
            "unit": "iter/sec",
            "range": "stddev: 0.004979109629800389",
            "extra": "mean: 6.748041674602933 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 846.0805373698115,
            "unit": "iter/sec",
            "range": "stddev: 0.00002183909453928667",
            "extra": "mean: 1.1819205806443365 msec\nrounds: 93"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "a21d71532bf909348b11726fbe101973e79433ec",
          "message": "refactor: remove boost dependency",
          "timestamp": "2022-02-18T15:12:13+01:00",
          "tree_id": "38176e01affdd2ec2f3e1a1758298f2f49faa84f",
          "url": "https://github.com/ibis-project/ibis/commit/a21d71532bf909348b11726fbe101973e79433ec"
        },
        "date": 1645194325674,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12462.648302965776,
            "unit": "iter/sec",
            "range": "stddev: 0.0007569501164232928",
            "extra": "mean: 80.23976731831763 usec\nrounds: 3017"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4450.993005670789,
            "unit": "iter/sec",
            "range": "stddev: 0.0002146604104819027",
            "extra": "mean: 224.6689668408712 usec\nrounds: 2292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.267044233764135,
            "unit": "iter/sec",
            "range": "stddev: 0.0015244809658863435",
            "extra": "mean: 33.03923542307639 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 76.0418631917419,
            "unit": "iter/sec",
            "range": "stddev: 0.0006711148613692835",
            "extra": "mean: 13.15065094444713 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 274885.5124528881,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037082991486506086",
            "extra": "mean: 3.637878151804698 usec\nrounds: 59172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 617.8994783602867,
            "unit": "iter/sec",
            "range": "stddev: 0.0004002419911213501",
            "extra": "mean: 1.6183862181817819 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 8069.697893993924,
            "unit": "iter/sec",
            "range": "stddev: 0.000027317467676008366",
            "extra": "mean: 123.9203763432427 usec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09041224398574763,
            "unit": "iter/sec",
            "range": "stddev: 0.07024697491142462",
            "extra": "mean: 11.060448849800007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.6411077369436198,
            "unit": "iter/sec",
            "range": "stddev: 0.012608392624910664",
            "extra": "mean: 609.344516200008 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.9838886691622803,
            "unit": "iter/sec",
            "range": "stddev: 0.027965653584361837",
            "extra": "mean: 1.0163751563999994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 70.27012842851468,
            "unit": "iter/sec",
            "range": "stddev: 0.0006624806405947743",
            "extra": "mean: 14.23079795588097 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.65279808212849,
            "unit": "iter/sec",
            "range": "stddev: 0.002152640921656843",
            "extra": "mean: 48.4195892500073 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.773174884905785,
            "unit": "iter/sec",
            "range": "stddev: 0.001798387113027595",
            "extra": "mean: 26.47381383870916 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 28.24078684739134,
            "unit": "iter/sec",
            "range": "stddev: 0.028607130908017198",
            "extra": "mean: 35.40977825454506 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 134.08385376271758,
            "unit": "iter/sec",
            "range": "stddev: 0.0004938522507488297",
            "extra": "mean: 7.458019529850753 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 211.54306769511513,
            "unit": "iter/sec",
            "range": "stddev: 0.0003967327535839044",
            "extra": "mean: 4.727169795236412 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5439944933726535,
            "unit": "iter/sec",
            "range": "stddev: 0.012782664779692811",
            "extra": "mean: 1.8382539018000101 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 138.11943520458522,
            "unit": "iter/sec",
            "range": "stddev: 0.0005116874640693666",
            "extra": "mean: 7.240110694912562 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 2.1804268544554235,
            "unit": "iter/sec",
            "range": "stddev: 0.013894311061770815",
            "extra": "mean: 458.6257951999755 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5361010278278252,
            "unit": "iter/sec",
            "range": "stddev: 0.01425597116200292",
            "extra": "mean: 1.865320057400004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 66.87243379391192,
            "unit": "iter/sec",
            "range": "stddev: 0.0007121879425084013",
            "extra": "mean: 14.953844854545133 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 30.734865614314028,
            "unit": "iter/sec",
            "range": "stddev: 0.021317207085409476",
            "extra": "mean: 32.53633878048498 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 132.31068045719636,
            "unit": "iter/sec",
            "range": "stddev: 0.0005115962778232435",
            "extra": "mean: 7.557968839284358 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 236.5312448205392,
            "unit": "iter/sec",
            "range": "stddev: 0.00034849797074604406",
            "extra": "mean: 4.22777126446326 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.48730480976732,
            "unit": "iter/sec",
            "range": "stddev: 0.0008617213769719588",
            "extra": "mean: 14.60124621311401 msec\nrounds: 61"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 343905.20723895734,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037243154488894665",
            "extra": "mean: 2.907778012518331 usec\nrounds: 53476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 290443.02860576625,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032806086253301068",
            "extra": "mean: 3.443016018667651 usec\nrounds: 25907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 75.05499569032592,
            "unit": "iter/sec",
            "range": "stddev: 0.000647965125448718",
            "extra": "mean: 13.32356348571336 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.43709269523009,
            "unit": "iter/sec",
            "range": "stddev: 0.0012588611902746751",
            "extra": "mean: 12.588577528090305 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 32.53903420066845,
            "unit": "iter/sec",
            "range": "stddev: 0.0024524520505627414",
            "extra": "mean: 30.732319645168108 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 195.74361423505502,
            "unit": "iter/sec",
            "range": "stddev: 0.0005025048491502247",
            "extra": "mean: 5.108723489692842 msec\nrounds: 194"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "bba29b1b14d08c76a35ea38f6d531030dd90e12a",
          "message": "chore: remove plumbum",
          "timestamp": "2022-02-18T15:24:37+01:00",
          "tree_id": "6715d846bff6f693e17c3b8bbc24da29b3e5dff9",
          "url": "https://github.com/ibis-project/ibis/commit/bba29b1b14d08c76a35ea38f6d531030dd90e12a"
        },
        "date": 1645195930798,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 178.08244110953677,
            "unit": "iter/sec",
            "range": "stddev: 0.0007988574066411828",
            "extra": "mean: 5.615376753426856 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.524666327112485,
            "unit": "iter/sec",
            "range": "stddev: 0.002327644978289966",
            "extra": "mean: 57.062427399995386 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 181.34996333560352,
            "unit": "iter/sec",
            "range": "stddev: 0.004096891889575942",
            "extra": "mean: 5.514200177418371 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 119.75247679218751,
            "unit": "iter/sec",
            "range": "stddev: 0.0006237223215216197",
            "extra": "mean: 8.35055797413986 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 67.77327458386455,
            "unit": "iter/sec",
            "range": "stddev: 0.007414696669404877",
            "extra": "mean: 14.755078696434712 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 71.5258834949943,
            "unit": "iter/sec",
            "range": "stddev: 0.002336330949336632",
            "extra": "mean: 13.980952784315965 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 15282.643819957277,
            "unit": "iter/sec",
            "range": "stddev: 0.00005682234758344559",
            "extra": "mean: 65.43370452003347 usec\nrounds: 4315"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 283008.7959496265,
            "unit": "iter/sec",
            "range": "stddev: 0.000004632938235952137",
            "extra": "mean: 3.533459080819498 usec\nrounds: 55866"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 23.854056149857204,
            "unit": "iter/sec",
            "range": "stddev: 0.03433630328455487",
            "extra": "mean: 41.9215916034467 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4114.161826491987,
            "unit": "iter/sec",
            "range": "stddev: 0.0016397088149008633",
            "extra": "mean: 243.06287457162756 usec\nrounds: 2336"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 63.55454130510264,
            "unit": "iter/sec",
            "range": "stddev: 0.0009313872719954167",
            "extra": "mean: 15.734516833334652 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 26.261940487758572,
            "unit": "iter/sec",
            "range": "stddev: 0.0028450239580576782",
            "extra": "mean: 38.07791737499855 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.08558451504774678,
            "unit": "iter/sec",
            "range": "stddev: 0.11401662726691336",
            "extra": "mean: 11.68435667880001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 43.41799126561495,
            "unit": "iter/sec",
            "range": "stddev: 0.0022797140761590664",
            "extra": "mean: 23.0319268775558 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 26.35951016925373,
            "unit": "iter/sec",
            "range": "stddev: 0.028233560243259084",
            "extra": "mean: 37.936972029412765 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5654822059378982,
            "unit": "iter/sec",
            "range": "stddev: 0.00952111614780329",
            "extra": "mean: 1.7684022405999826 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 7545.860468409542,
            "unit": "iter/sec",
            "range": "stddev: 0.0000796244353444177",
            "extra": "mean: 132.52299114017043 usec\nrounds: 3499"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.503069678923012,
            "unit": "iter/sec",
            "range": "stddev: 0.00889678303293325",
            "extra": "mean: 665.3051511999934 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5583120610594403,
            "unit": "iter/sec",
            "range": "stddev: 0.009181627687294115",
            "extra": "mean: 1.7911130168 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 61.41149566575032,
            "unit": "iter/sec",
            "range": "stddev: 0.003060695811389076",
            "extra": "mean: 16.28359624137453 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 119.90539035562357,
            "unit": "iter/sec",
            "range": "stddev: 0.00041849760330328346",
            "extra": "mean: 8.339908631581382 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 216.14156961083378,
            "unit": "iter/sec",
            "range": "stddev: 0.0004445443569606342",
            "extra": "mean: 4.62659728899219 msec\nrounds: 218"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 298652.55994912575,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059967299581447555",
            "extra": "mean: 3.348372437089928 usec\nrounds: 47847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 131.20363809173048,
            "unit": "iter/sec",
            "range": "stddev: 0.00043012400025445346",
            "extra": "mean: 7.621739873560932 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 53.73615605281231,
            "unit": "iter/sec",
            "range": "stddev: 0.001753651604468806",
            "extra": "mean: 18.609444244898953 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 266616.8694791532,
            "unit": "iter/sec",
            "range": "stddev: 0.000004259221458397462",
            "extra": "mean: 3.7507004037424205 usec\nrounds: 21322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 28.864022341222572,
            "unit": "iter/sec",
            "range": "stddev: 0.0015860268934183947",
            "extra": "mean: 34.64520599999105 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.9578312753529785,
            "unit": "iter/sec",
            "range": "stddev: 0.013137327204895667",
            "extra": "mean: 510.76924379998445 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 28.54115415376047,
            "unit": "iter/sec",
            "range": "stddev: 0.0020731604870036237",
            "extra": "mean: 35.03712549999468 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.9326948647739408,
            "unit": "iter/sec",
            "range": "stddev: 0.015664797924536802",
            "extra": "mean: 1.0721620089999875 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 621.7061691021892,
            "unit": "iter/sec",
            "range": "stddev: 0.00009771633202015465",
            "extra": "mean: 1.608476881360383 msec\nrounds: 59"
          }
        ]
      }
    ]
  }
}
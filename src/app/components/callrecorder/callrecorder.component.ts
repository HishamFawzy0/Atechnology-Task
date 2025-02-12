import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import * as echarts from 'echarts';
@Component({
  selector: 'app-callrecorder',
  imports: [TranslateModule],
  templateUrl: './callrecorder.component.html',
  styleUrl: './callrecorder.component.scss',
})
export class CallrecorderComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      type EChartsOption = echarts.EChartsOption;

      var chartDom = document.getElementById('main')!;
      var myChart = echarts.init(chartDom);
      var option: EChartsOption;

      option = {
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '50%'],
            padAngle: 5,
            itemStyle: {
              borderRadius: 5,
            },
            labelLine: {
              show: false,
            },
            label: {
              show: false,
            },
            // adjust the start and end angle
            startAngle: -150,
            endAngle: -30,
            data: [
              {
                value: 735,
                name: 'Direct',
                itemStyle: {
                  color: '#3E97FF',
                },
                emphasis: {
                  itemStyle: {
                    color: '#3E97FF',
                  },
                },
              },
              {
                value: 1048,
                name: 'Search Engine',
                itemStyle: {
                  color: '#EFEFEF',
                },
                emphasis: {
                  itemStyle: {
                    color: '#EFEFEF',
                  },
                },
              },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    }
  }
}
